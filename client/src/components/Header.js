import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-500 py-4">
      <div className="container mx-auto px-1">
        <nav className="flex justify-between items-center">
          <div className="text-white font-bold text-lg">John Doe</div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-white hover:text-gray-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/resume" className="text-white hover:text-gray-300">
                Resume/CV
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-white hover:text-gray-300">
                Blog/Articles
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="text-white hover:text-gray-300">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-white hover:text-gray-300">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-white hover:text-gray-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/signin" className="text-white hover:text-gray-300">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/register" className="text-white hover:text-gray-300">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
