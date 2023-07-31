import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";

const ENDPOINT = "http://localhost:3000"; // Change this to match your backend URL

export default function Toggle(props) {
  const [isOn, setIsOn] = useState(false);
  const [transcript, setTranscript] = useState("");
  const socket = openSocket(ENDPOINT, { transports: ["websocket"] });

  const startListening = () => {
    // Check if the browser supports the SpeechRecognition API
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript; // transcrito mensaje

        setTranscript(transcript);
        socket.emit("transcription", transcript); // Send the transcription to the backend
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };

      recognition.start();
    } else {
      console.error("Speech recognition not supported in this browser.");
    }
  };
  const handleClick = () => {
    if (!isOn) {
      startListening();
    }
    setIsOn(!isOn);
  };

  const ToggleButton = (
    <button
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      onClick={handleClick}
    >
      {isOn ? "Stop" : "Start"}
    </button>
  );
  return (
    <div>
      {ToggleButton}
      {isOn && props.children}
      {transcript}
    </div>
  );
}
