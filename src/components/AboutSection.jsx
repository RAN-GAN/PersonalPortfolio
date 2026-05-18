import React from "react";

const AboutSection = ({ content }) => {
  const displayContent = content?.long || [];

  return (
    <section className="w-full mt-4">
      <div className="space-y-4">
        {displayContent.map((paragraph, index) => (
          <React.Fragment key={index}>
            <p className="text-lg leading-relaxed text-primary m-0">
              {paragraph}
            </p>
            <br />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
