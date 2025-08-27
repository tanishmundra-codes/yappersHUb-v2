import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0D0F13] py-12 font-sans border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center px-6 md:px-12">

        {/* Logo */}
        <div className="text-2xl font-bold text-white mb-4">
          Yappers<span className="text-[#33FFDD]">HUB</span>
        </div>

        {/* Contact Me */}
        <h3 className="text-white text-lg font-semibold mb-4">Contact Me</h3>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <a href="https://x.com/tanishshh" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://github.com/tanishmundra-codes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.34 6.84 9.69.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.04 1-2.76-.1-.26-.44-1.3.09-2.71 0 0 .83-.27 2.74 1.02A9.29 9.29 0 0 1 12 6.8c.84.01 1.69.11 2.48.32 1.9-1.29 2.73-1.02 2.73-1.02.54 1.41.2 2.45.1 2.71.63.72 1 1.64 1 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.89 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.48A10.26 10.26 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>

          <a href="www.linkedin.com/in/tanishmundra" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} YappersHUB. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
