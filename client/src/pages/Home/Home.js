import React, { useState } from "react";
// import "./Home.css";
const Home = () => {
  return (
    <div className="">
      <div>Home</div>
      <p className="">
        This is some text that will be styled based on the current mode.
      </p>
      {/* <button onClick={toggleDarkMode}>Toggle Mode</button> */}
    </div>
  );
};

export default Home;

// // Home.js
// import React, { useEffect } from "react";
// import "./Home.css"; // Import the CSS file

// const Home = () => {
//   useEffect(() => {
//     const createSnowflakes = () => {
//       const snowflakeContainer = document.getElementById("snowflake-container");
//       const numSnowflakes = 50;

//       for (let i = 0; i < numSnowflakes; i++) {
//         const snowflake = document.createElement("div");
//         snowflake.classList.add("snowflake");
//         snowflake.style.left = `${Math.random() * 100}%`;
//         snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
//         snowflake.style.animationDelay = `${Math.random()}s`;
//         snowflakeContainer.appendChild(snowflake);
//       }
//     };

//     const intervalId = setInterval(createSnowflakes, 5000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="home h-screen">
//       <div id="snowflake-container"></div>
//       <div>Home</div>
//     </div>
//   );
// };

// export default Home;
