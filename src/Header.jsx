import React from "react";

const Header = () => {
  return (
    <header className="bg-white py-2.5 px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src="images/logo_black-1.svg" alt="Logo" className="md:items-center" />
        </div>
        <div className="flex justify-end gap-4">
          <button className="border-2 rounded-lg py-2.5 px-4 border-green-500">
            Chat with Us
          </button>
          <button className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white rounded-lg py-2.5 px-4">
            Call Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
