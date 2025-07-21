import React from "react";

const Header = () => {
  return (
    <header className="bg-white py-2.5 px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center md:justify-start items-center">
          <img
            src="/images/logo_black-1.svg"
            alt="Company Logo"
            className="max-h-10"
          />
        </div>
        <nav className="flex justify-end gap-4 flex-wrap">
          <button
            className="border-2 rounded-lg py-2.5 px-4 border-green-500 hover:bg-green-500 hover:text-white transition duration-300 flex items-center gap-2"
            aria-label="Chat with Us"
          >
            <img
              className="w-6 h-6"
              src="/images/Vector.png"
              alt="Chat Icon"
            />
            Chat with Us
          </button>
          <button
            className="bg-blue-500 text-white rounded-lg py-2.5 px-4 hover:opacity-90 transition duration-300 flex items-center gap-2"
            aria-label="Call Us"
          >
            Call Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
