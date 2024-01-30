import React, { useState, useEffect } from "react";

const Update = ({ announcements }) => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setScrollIndex((prevIndex) =>
          prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 50); // Change the duration as needed

    return () => clearInterval(interval);
  }, [isPaused, announcements.length]);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    // <div className="announcements-container">
    //   <div className="announcements">
    //     {announcements.map((announcement, index) => (
    //       <div
    //         key={index}
    //         className={`announcement ${index === scrollIndex ? "active" : ""}`}
    //         onClick={handlePause}
    //       >
    //         {announcement}
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="scrollable-text-container">
      <div
        className="scrollable-text"
        style={{ transform: `translateY(-${scrollIndex}px)` }}
      >
        {announcements.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
};

export default Update;
