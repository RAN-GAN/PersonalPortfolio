It all started with a simple problem.

I was working on an internal project where the application kept fetching the same user profile over and over again. The repeated database lookups were unnecessary, so adding a cache was the obvious solution.

My first thought was to use Redis.

Then I started looking for a free Redis hosting service. While there were managed options available, none of them really fit what I was looking for. That's when a different idea came to mind:

**Why not build my own Redis-like server?**

Initially, I considered deploying it on Cloudflare. But I quickly realized that Cloudflare Workers are JavaScript-first, while I wanted to build the project in Go.

At that point, I had another realization.

Over the past few months, I had been relying heavily on AI to generate code. While it helped me build applications quickly, I noticed that I wasn't really learning how the code worked. I was getting good at writing prompts not writing software.

So I made a promise to myself.

For this project, I wouldn't use AI to write the code. Every line I wrote had to be something I understood completely. If I couldn't explain it, I wouldn't use it.

That decision changed the entire experience.

Instead of rushing toward the final product, I spent time understanding TCP networking, goroutines, mutexes, protocols, WebSockets, and how Redis actually communicates with clients. Progress was slower, but every feature I completed taught me something new.

## Introducing Rendis

The result is **Rendis** a self-built, Redis-compatible in-memory database written from scratch in Go. It implements the Redis RESP protocol, supports concurrent client handling using goroutines, and uses a thread-safe storage engine protected by "sync.RWMutex"

### Core Features

* Custom TCP server written in Go
* Redis RESP protocol implementation
* In-memory key-value storage
* Concurrent client handling
* Thread-safe operations
* Key expiration system (both Lazy and Active Expiration)

It supports essential commands like `"PING" , "SET", "GET", "DEL", "EXISTS", "EXPIRE", and "TTL"`

## The Deployment Roadblock

After building an initial MVP, I deployed it on Render for testing.

That's when I hit another roadblock.

Render doesn't support exposing raw TCP ports on its free web services, which meant my Redis-compatible TCP server couldn't accept client connections.

Rather than switching platforms, I decided to rethink the architecture.

Instead of exposing a TCP server directly, I created a **TCP-over-WebSocket deployment bridge**. The server runs an HTTP endpoint that upgrades incoming requests to WebSocket connections. Once the connection is upgraded, the client and server can communicate continuously, tunnelling RESP over WebSockets.

### Architecture

```text
                    Rendis Client
                         |
                    RESP over WebSocket 
                         |
================================================
                 Cloud Deployment
================================================
                 WebSocket Gateway
                         |
                  localhost TCP
                         |
                 Rendis TCP Server
                         |
                In-Memory Storage Engine
```

This gateway is protected by API Key authentication and Origin verification, ensuring secure access over the public internet.

## Building Client Libraries

Another issue appeared. I didn't want to write WebSocket connection logic every time I wanted to use the cache in a project. Managing connections, sending commands, parsing responses, and handling reconnections would become repetitive very quickly.

So I decided to build official client libraries for Go, Python, and JavaScript.

You can check out the main repository and the clients here:
* [Rendis GitHub Repository ↗](https://github.com/RAN-GAN/rendis)
* [Golang Client ↗](https://github.com/RAN-GAN/rendis/tree/master/client/golang)
* [Python Client ↗](https://pypi.org/project/rendis/)
* [JavaScript Client ↗](https://www.npmjs.com/package/@ran-gan/rendis)

The goal is simple: make the cache feel like any other database client. Instead of dealing with WebSocket messages manually, developers can write something like:

```python
from rendis import Client

# Initialize with your deployed server URL and your secret key
client = Client("ws://your-rendis-deployment.onrender.com", "my-secure-rendis-key")

# Use standard Redis commands
client.set("my_key", "hello world")
print(client.get("my_key"))

client.close()
```

## Performance Benchmarks

I built a custom WebSocket benchmark tool to test it. Under local load with 50 concurrent workers, Rendis handles over **14,000 ops/sec** with an average latency of ~3.4ms. Even when deployed cloud-to-cloud on Render's free tier, it consistently processes over 1,500 ops/sec with a 0% error rate.

## Looking Forward

This project started as a way to cache user profiles. It slowly became a way to learn systems programming, networking, protocols, concurrency, and library design.

Redis appears simple on the surface: `SET key value` `GET key` But internally, it involves TCP networking, binary protocol parsing, concurrent data access, memory management, and distributed deployment challenges.

More importantly, it reminded me that the best way to learn isn't by generating code it's by understanding every line you write.

Sometimes the best projects aren't the ones you planned. They're the ones that started because you couldn't find the right tool, so you decided to build it yourself.
