import React, { useState } from "react";

export default function Project() {
    const [inputValue, setInputValue] = useState('');
    const [outputValues, setOutputValues] = useState<string[]>([]);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        setOutputValues((prevOutputValues: string[]) => [inputValue, ...prevOutputValues]);
        setInputValue(''); // Clear the input field
      }
    };

  return (
    <div>
        <div>
          {outputValues.map((value, index) => (
            <p key={index}>{`You entered: ${value}`}</p>
          ))}
        </div>
      <div className="mb-6 flex items-start justify-center content-between">
        <input
          type="text"
          id="large-input"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        
        <p> Test </p>
      </div>
    </div>
  );
}
