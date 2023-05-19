import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    generateFireworks();
  }, []);

  const generateFireworks = () => {
    const fireworksContainer = document.getElementById("fireworks-container");

    for (let i = 0; i < 10; i++) {
      const fireworks = document.createElement("div");
      fireworks.className = "rocket";
      fireworks.style.left = `${Math.random() * 100}vw`;

      fireworksContainer.appendChild(fireworks);
    }
  };

  useEffect(() => {
    // Set the target date and time for the countdown
    const targetDate = new Date("April 27, 2024 07:58:32 UTC").getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        // Countdown has ended
        clearInterval(interval);
        setCountdown("PUMP IT!");
      } else {
        // Calculate remaining time
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the countdown state
        setCountdown(
          `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
        );
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="text">
        Bitcoin halving is a festival, not just another date.
      </h1>

      {countdown && <h1 className="countdown">{countdown}</h1>}
      <div className="fireworks-container" id="fireworks-container"></div>

      <button
        className="gradient-button"
        onClick={() => window.open("https://tfl.vercel.app/", "_blank")}
      >
        MINT A FREE NFT
      </button>

      <footer className="footer">
        <a
          href="https://twitter.com/0xSharmaG"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter-link"
        >
          <div className="fireworks-container" id="fireworks-container"></div>

          <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
        </a>
      </footer>
    </div>
  );
}

export default App;
