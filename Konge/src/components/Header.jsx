import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "News and Events", path: "/news" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white text-gray-800 shadow-md">
      {/* Left: School Name */}
      <Link to="/" className="text-xl font-bold text-blue-800 hover:opacity-80">
        Konge Parents Primary School
      </Link>

      {/* Right: Nav Links (no border) */}
      <nav className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-sm font-medium hover:text-blue-600 transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
