// Snowfall.js
import React from "react";
import "./SnowFall.css";
const Snowfall = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}>
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="snowflake h-screen"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 2}s`,
            animationDelay: `${Math.random() * 2}s`,
            background: darkMode ? "white" : "black",
            zIndex: -1,
          }}
        />
      ))}
      <button
        className="relative z-10"
        style={{
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black",
        }}
        onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      {children}
    </div>
  );
};

export default Snowfall;
