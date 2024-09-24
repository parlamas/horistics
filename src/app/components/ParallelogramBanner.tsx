// src/components/ParallelogramBanner.tsx

"use client"; // This makes it a Client Component

import React, { useState, useEffect } from 'react';

const ParallelogramBanner: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    {
      word: "inflection point",
      definition: (
        <>
          Et <span className="highlight">inflection point</span> er et tidspunkt, hvor noget ændrer sig pludseligt eller på en vigtig måde.<br />

          <span className="trans">
            We are at an <span className="y">inflection point</span> in history, maybe the same as in the late 1930s.<br />
            Vi er på et <span className="y">vendepunkt</span> i historien, måske det samme som i slutningen af ​​1930&apos;erne.
          </span>
        </>
      ),
    },
    {
      word: "writ large",
      definition: (
        <>
          Hvis du siger, at en ting er en anden ting <span className="highlight">writ large</span>, mener du, at den første ting er en større eller mere 
          overdrevet version af den anden ting.<br />
          
          <span className="trans">
            Her life was her personality <span className="y">writ large</span>.<br />
            Hendes liv var hendes personlighed <span className="y">skrevet stort</span>.
          </span>
        </>
      ),
    },
    // Add more entries with different words and definitions if needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000); // Change text every 6 seconds (6000ms)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentTextIndex, texts.length]); // Added texts.length to the dependency array

  return (
    <div className="parallelogram">
      <p className="word">{texts[currentTextIndex].word}</p>
      <p className="definition">{texts[currentTextIndex].definition}</p>
    </div>
  );
};

export default ParallelogramBanner;
