import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-between bg-white dark:bg-[#222426] rounded-2xl px-[4%] border border-white dark:border-[#3f4143] drop-shadow-md dark:shadow-none py-[1.4%]  dark:border-">
        <div className="logo">Jon Doe</div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/service">Service</Link>
          <Link to="/price">Price</Link>
          <Link to="/faq">Faq</Link>
          <Link to="/article">Article</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Link className="action">
          <div>Let's Talk</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
