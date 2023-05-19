import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [countdown, setCountdown] = useState(null);

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
    <>
      <Confetti width={1200} />s
      <div className="container">
        <h1 className="text">
          Bitcoin halving is a festival, not just another date.
        </h1>

        {countdown && <h1 className="countdown ">{countdown}</h1>}

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
            <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
