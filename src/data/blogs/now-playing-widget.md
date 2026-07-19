# How I Built a Custom "Now Playing" Widget for My Portfolio (Without Relying on the Spotify API)

When building my personal portfolio, I wanted it to feel alive. A static page with a list of projects is great, but I wanted visitors to get a glimpse of my personality right in that exact moment. 

Since I'm almost always listening to music while I code, adding a live "Now Playing" widget felt like the perfect touch. 

Initially, I thought about just hooking into the Spotify API. But there was a catch: I don't just use Spotify. I frequently switch between Spotify and YouTube Music. The YouTube Music API is notoriously closed off, and I didn't want to build two completely separate integrations.

I needed a universal solution that could capture *whatever* was playing on my phone and beam it directly to my website. 

Here is how I built a custom, end-to-end "Now Playing" pipeline using an Android app, Cloudflare Workers, and a simple frontend poller.

## The Architecture

The system is broken down into three main parts:
1. **The Observer (Mobile App):** Listens to my phone's notifications to see what music player is active.
2. **The Middleman (Cloudflare Worker):** Receives the song data and temporarily stores it.
3. **The Display (Portfolio Component):** Constantly asks the middleman what's playing and updates the UI.

> "By relying on OS-level notifications rather than specific APIs, this method becomes completely platform-agnostic. If it has a media notification, my website can display it."

Let's break down how each part works.

## Part 1: The Observer (Mobile App)

The brain of the operation lives on my Android phone. Whenever you play a song on Android—whether it's Spotify, YouTube Music, Apple Music, or even a podcast app—it creates a media notification.

I built a lightweight background app that utilizes Android's `NotificationListenerService`. This service allows the app to fire an `onNotificationPosted` event whenever a new notification appears or updates.

**How it works:**
- The app constantly listens for notification updates.
- It filters the incoming notifications against a whitelist of package names `(e.g., "com.spotify.music", "com.google.android.apps.youtube.music").`
- If a match is found, it extracts the **Title** (Song Name) and **Text** (Artist Name) from the notification bundle.
- It takes this extracted data and makes an HTTP POST request, pushing the payload to my Cloudflare Worker.

## Part 2: The Middleman (Cloudflare Worker)

I needed a place to store this data where my website could quickly access it. A traditional database felt like overkill. I chose **Cloudflare Workers** combined with **Cloudflare KV** (Key-Value storage) for a few reasons:
- **Speed:** It runs on the edge, meaning it's incredibly fast for my portfolio to fetch data from it.
- **Simplicity:** It's perfect for storing simple string data like `{ "song": "Starboy", "artist": "The Weeknd" }`.

### The Magic of the 3-Minute TTL
One issue I anticipated was what happens when I pause a song. The notification might still be on my lock screen, but I'm not actively listening to it. 

To solve this, whenever the mobile app pushes a new song to the Worker, the Worker saves it in the KV store with a **Time-To-Live (TTL) of 3 minutes**. 

If the song is still playing, the mobile app will naturally update the notification (e.g., when the next song starts or the progress bar ticks), which resets the 3-minute timer. If I pause the music, the updates stop, the 3 minutes expire, the KV store clears itself out, and my website knows to stop displaying the widget. 

## Part 3: The Display (Now Playing Component)

The final piece of the puzzle lives on my portfolio website. 

I built a `NowPlaying` UI component that acts as a simple poller. Every 30 seconds, it fires off a lightweight `GET` request to the Cloudflare Worker.

- **If the KV store is empty** (meaning I'm not listening to anything, or I paused the music over 3 minutes ago), the Worker returns an empty response. The UI component gracefully hides itself.
- **If the KV store has data**, the Worker returns the song name and artist. The UI component renders it, usually accompanied by some subtle CSS animations to give it that live, dynamic feel.

```javascript
// A simplified version of the polling logic
useEffect(() => {
  const fetchNowPlaying = async () => {
    try {
      const res = await fetch('https://my-worker.username.workers.dev/now-playing');
      const data = await res.json();
      
      if (data && data.song) {
        setNowPlaying(data);
      } else {
        setNowPlaying(null);
      }
    } catch (error) {
      console.error("Failed to fetch song data");
    }
  };

  fetchNowPlaying();
  const interval = setInterval(fetchNowPlaying, 30000); // Poll every 30 seconds
  
  return () => clearInterval(interval);
}, []);
```

## Conclusion & Future Plans

This was a highly satisfying weekend project. Not only did it solve the problem of API rate limits and closed ecosystems, but it also gave me a great excuse to play around with Android services and Cloudflare Workers. 

The widget adds a fun, personal touch to my portfolio that visitors love. 

**What's Next?**
Right now, the 30-second polling works fine, but it can occasionally feel slightly delayed. In the future, I plan to upgrade the architecture from HTTP polling to **WebSockets**. This would allow the Cloudflare Worker to instantly push updates to the website the millisecond a song changes. I'd also love to figure out a reliable way to extract and pass along the album art!

***

*[End of Transmission]*
