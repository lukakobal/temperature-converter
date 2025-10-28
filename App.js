import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const c = e.target.value;
    setCelsius(c);
    if (c === "") {
      setFahrenheit("");
    } else {
      setFahrenheit((c * 9) / 5 + 32);
    }
  };

  const handleFahrenheitChange = (e) => {
    const f = e.target.value;
    setFahrenheit(f);
    if (f === "") {
      setCelsius("");
    } else {
      setCelsius(((f - 32) * 5) / 9);
    }
  };

  return (
    <div className="container">
      <h1>🌡️ Temperature Converter</h1>

      <div className="input-group">
        <label>°C:</label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter Celsius"
        />
      </div>
      <div className="input-group">
        <label>°F:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter Fahrenheit"
        />
      </div>
    </div>
  );
}
