import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex items-start md:items-center justify-between bg-white dark:bg-[#222426] rounded-2xl px-[4%] border border-gray-200 dark:border-[#3f4143] drop-shadow-md dark:shadow-none py-[1.6%]  ">
        <div className="logo text-3xl font-bold">
          Jon <span className="text-dprimary">Doe</span>
        </div>
        {isOpen && (
          <div className=" w-[50%] h-full bg-white dark:bg-[#222426] z-50 p-5 flex flex-col justify-start items-start">
            <div className="menu w-[60%] flex flex-col justify-between items-center font-bold mt-5">
              <Link
                to="/"
                className="hover:text-dprimary transition-colors duration-500 py-1">
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-dprimary transition-colors duration-500 py-2">
                About
              </Link>
              <Link
                to="/work"
                className="hover:text-dprimary transition-colors duration-500 py-2">
                Work
              </Link>
              <Link
                to="/service"
                className="hover:text-dprimary transition-colors duration-500 py-2">
                Service
              </Link>
              <Link
                to="/price"
                className="hover:text-dprimary transition-colors duration-500 py-2">
                Price
              </Link>
              <Link
                to="/faq"
                className="hover:text-dprimary transition-colors duration-500 py-2">
                Faq
              </Link>
              <Link
                to="/article"
                className="hover:text-dprimary transition-colors duration-500 py-2">
                Article
              </Link>
              <Link
                to="/contact"
                className="hover:text-dprimary transition-colors duration-500 py-2">
                Contact
              </Link>
            </div>
            <Link className="action flex items-center justify-center mt-5">
              <div className="bg-dprimary rounded-full px-5 py-3 font-bold text-white">
                Let's Talk
              </div>
              <div className=" action-icon p-3 bg-dprimary rounded-full overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white icon">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </Link>
          </div>
        )}
        <div className="menu w-[60%] justify-between items-center font-bold hidden md:flex">
          {" "}
          <Link
            to="/"
            className="hover:text-dprimary transition-colors duration-500">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-dprimary transition-colors duration-500">
            About
          </Link>
          <Link
            to="/work"
            className="hover:text-dprimary transition-colors duration-500">
            Work
          </Link>
          <Link
            to="/service"
            className="hover:text-dprimary transition-colors duration-500">
            Service
          </Link>
          <Link
            to="/price"
            className="hover:text-dprimary transition-colors duration-500">
            Price
          </Link>
          <Link
            to="/faq"
            className="hover:text-dprimary transition-colors duration-500">
            Faq
          </Link>
          <Link
            to="/article"
            className="hover:text-dprimary transition-colors duration-500">
            Article
          </Link>
          <Link
            to="/contact"
            className="hover:text-dprimary transition-colors duration-500">
            Contact
          </Link>
        </div>
        <Link className="action hidden md:flex items-start justify-center">
          <div className="bg-dprimary rounded-full px-5 py-3 font-bold text-white">
            Let's Talk
          </div>
          <div className=" action-icon p-3 bg-dprimary rounded-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white icon">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </Link>
        <div className="md:hidden mt-[0.4rem]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" flex items-center">
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-dprimary">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-dprimary">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
