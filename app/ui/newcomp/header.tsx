"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Initialize state based on localStorage
    return window.localStorage.getItem("dark-mode") === "enabled";
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("dark-mode", newMode ? "enabled" : "disabled");
      return newMode;
    });
  };

  return (
    <header className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex items-center justify-between p-6 max-w-screen-xl mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            width={32}
            height={32}
            alt="Flowbite Logo"
            className="h-8"
          />
          <span className="text-2xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Link>
        <div className="hidden md:flex flex-grow items-center justify-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-blue-700 dark:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 px-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="block py-2 px-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleDarkMode}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isDarkMode ? "bg-white" : "bg-gray-800"
            }`}
            aria-label="Toggle dark mode"
          >
            {/* Empty button styled as a circle */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
