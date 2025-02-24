import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1c2828] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">Harmony Heals</h1>
            <p className="mt-2 text-sm">
              Bringing balance to your life with binaural beats and healing
              frequencies.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <ul className="text-center">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 flex justify-end">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs">
          <p>&copy; 2024 Harmony Heals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
