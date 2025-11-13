import React from "react";

const AboutSection = ({ content, showLong = True }) => {
  const longContent = content?.long || [];
  const displayContent = longContent;

  return (
    <section className="w-full mt-4">
      <div className="space-y-4">
        {displayContent.map((paragraph, index) => (
          <>
            <p key={index} className="text-lg leading-relaxed text-primary m-0">
              {paragraph}
            </p>
            <br />
          </>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
