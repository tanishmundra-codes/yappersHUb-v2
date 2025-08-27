import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-[#0D0F13] border-b border-gray-700 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Left - Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/">Yappers<span className="text-[#33FFDD]">HUB</span></Link>
        </div>

        {/* Center - Nav (desktop only) */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <NavLinkItem to="/" label="Home" />
          <NavLinkItem to="/about" label="About" />
          <NavLinkItem to="/listings/new" label="Add tool" />
          <a
            href="https://yaps.kaito.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-white text-lg font-semibold group transition-all duration-300 hover:-translate-y-1"
          >
            Kaito
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#33FFDD] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Right - Contact Button (desktop only) */}
        <div className="hidden md:flex">
          <Link
            to="https://x.com/tanishshh"
            className="bg-[#33FFDD] text-gray-900 px-4 py-2 rounded font-semibold hover:bg-[#2BFFCC] transition-colors duration-300"
          >
            Contact Me
          </Link>
        </div>

        {/* Hamburger - Mobile only */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 space-y-4">
          <NavLinkItem to="/" label="Home" onClick={closeMenu} />
          <NavLinkItem to="/about" label="About" onClick={closeMenu} />
          <NavLinkItem to="/listings/new" label="Add tool" onClick={closeMenu} />
          <NavLinkItem to="/https://yaps.kaito.ai/" label="Kaito" onClick={closeMenu} />
          <Link
            to="#"
            onClick={closeMenu}
            className="block bg-[#33FFDD] text-gray-900 px-4 py-2 rounded font-semibold hover:bg-[#2BFFCC] transition-colors duration-300"
          >
            Contact Me
          </Link>
        </div>
      )}
    </header>
  );
}

// NavLink Item
function NavLinkItem({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="relative text-white text-lg font-semibold group transition-all duration-300 hover:-translate-y-1"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#33FFDD] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

export default Header;
