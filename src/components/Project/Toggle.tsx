import React, { useState } from "react";

export default function Toggle(props) {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    if (isOn) {
      {
        console.log("ON");
      }
    }
    setIsOn(!isOn);
  };

  const ToggleButton = (
    <button
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      onClick={handleClick}
    >
      Speak
    </button>
  );
  return (
    <div>
      {ToggleButton}
      {isOn && props.children}
    </div>
  );
}
