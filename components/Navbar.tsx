'use client';
import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { title: 'Home', link: '#home' },
  { title: 'About', link: '#about' },
  { title: 'Skills', link: '#skills' },
  { title: 'Projects', link: '#projects' },
  { title: 'Contact', link: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-16.25 fixed top-0 shadow-lg shadow-cyan-500/20 bg-slate-950/80 backdrop-blur-md z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="#home" 
          className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          Harsh
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between w-auto h-full">
          <div className="flex items-center justify-center gap-1 border border-cyan-500/30 bg-slate-900/40 px-6 py-2 rounded-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium px-3 py-1 rounded-md hover:bg-cyan-500/10"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 text-2xl hover:text-cyan-400 transition-colors duration-200 focus:outline-none"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16.25 left-0 w-full bg-slate-950 border-t border-cyan-500/30 p-5 flex flex-col items-center text-gray-300 md:hidden">
          <div className="flex flex-col items-center gap-4 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium text-center w-full py-2 rounded-md hover:bg-cyan-500/10"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
