// src/app/components/NavbarDesktop.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth, UserButton } from '@clerk/nextjs';


const NavbarDesktop: React.FC = () => {
  const { userId } = useAuth();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  //const [searchResults, setSearchResults] = useState<string[]>([]); // Placeholder for search results

  const handleSubMenuToggle = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  const closeMenus = () => {
    setOpenSubMenu(null);
  };

  const handleFormToggle = () => {
    setFormOpen(!formOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const request = formData.get('request') as string;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, request }),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormOpen(false);
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    // Assuming you navigate to a results page with the query as a URL parameter
    if (searchQuery.trim()) {
        window.location.href = `/search-results?query=${encodeURIComponent(searchQuery)}`;
    }
};

  return (
    <header className="navbar bg-cyan-950 text-white fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold" style={{ fontSize: '10pt' }}>
          Home
        </Link>
        <nav className="hidden md:flex space-x-4">
          {/* Philosophy Menu */}
          <div className="relative">
            <button className="menu-item" style={{ fontSize: '9pt' }} onClick={() => handleSubMenuToggle('Philosophy')}>
              Philosophy*
            </button>
            {openSubMenu === 'Philosophy' && (
              <div className="submenu-container" style={{ zIndex: '3000' }}>
                <Link href="/philosophy/dialectics" className="block px-4 py-2" onClick={closeMenus}>
                  Dialectics
                </Link>
                <Link href="/philosophy/horistics" className="block px-4 py-2" onClick={closeMenus}>
                  Horistics
                </Link>
                <Link href="/philosophy/republic" className="block px-4 py-2" onClick={closeMenus}>
                  The Republic*
                </Link>
                <Link href="/philosophy/etymology" className="block px-4 py-2" onClick={closeMenus}>
                  Etymology
                </Link>
                <Link href="/philosophy/ethics" className="block px-4 py-2" onClick={closeMenus}>
                  Ethics
                </Link>
                <Link href="/philosophy/politics" className="block px-4 py-2" onClick={closeMenus}>
                  Politics
                </Link>
                <Link href="/philosophy/economics" className="block px-4 py-2" onClick={closeMenus}>
                  Economics
                </Link>
              </div>
            )}
          </div>

          {/* History Menu */}
          <div className="relative">
            <button className="menu-item" style={{ fontSize: '9pt' }} onClick={() => handleSubMenuToggle('History')}>
              History
            </button>
            {openSubMenu === 'History' && (
              <div className="submenu-container">
                <Link href="/history/classical-greek" className="block px-4 py-2" onClick={closeMenus}>
                  Classical Greek History
                </Link>
                <Link href="/history/byzanium" className="block px-4 py-2" onClick={closeMenus}>
                  Byzanium
                </Link>
                <Link href="/history/modern-greek" className="block px-4 py-2" onClick={closeMenus}>
                  Modern Greek History
                </Link>
                <Link href="/history/cooking" className="block px-4 py-2" onClick={closeMenus}>
                  Cooking
                </Link>
              </div>
            )}
          </div>

          {/* Music Menu */}
          <div className="relative">
            <button className="menu-item" style={{ fontSize: '9pt' }} onClick={() => handleSubMenuToggle('Music')}>
              Music
            </button>
            {openSubMenu === 'Music' && (
              <div className="submenu-container">
                <Link href="/music/nature" className="block px-4 py-2" onClick={closeMenus}>
                  Nature
                </Link>
                <Link href="/music/speech" className="block px-4 py-2" onClick={closeMenus}>
                  Speech
                </Link>
                <Link href="/music/metron" className="block px-4 py-2" onClick={closeMenus}>
                  Metron
                </Link>
                <Link href="/music/playing" className="block px-4 py-2" onClick={closeMenus}>
                  Playing
                </Link>
              </div>
            )}
          </div>

          {/* Search Field for English to Classical Greek */}
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="English to Classical Greek"
              className="w-full px-2 py-1 rounded text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ fontSize: '9pt' }}
            />
            <button type="submit" className="ml-2 bg-blue-500 text-white py-1 px-4 rounded" style={{ fontSize: '9pt' }}>
              Search
            </button>
          </form>

          {/* Social Skills Menu */}
          <div className="relative">
            <button className="menu-item" style={{ fontSize: '9pt' }} onClick={() => handleSubMenuToggle('Social Skills')}>
              Social Skills
            </button>
            {openSubMenu === 'Social Skills' && (
              <div className="submenu-container">
                <Link href="/social-skills/family" className="block px-4 py-2" onClick={closeMenus}>
                  Family
                </Link>
                <Link href="/social-skills/friends" className="block px-4 py-2" onClick={closeMenus}>
                  Friends
                </Link>
                <Link href="/social-skills/lovers" className="block px-4 py-2" onClick={closeMenus}>
                  Lovers
                </Link>
                <Link href="/social-skills/work" className="block px-4 py-2" onClick={closeMenus}>
                  Work
                </Link>
                <Link href="/social-skills/army" className="block px-4 py-2" onClick={closeMenus}>
                  The Army
                </Link>
              </div>
            )}
          </div>

          {/* Languages Menu */}
          <div className="relative">
            <button className="menu-item" style={{ fontSize: '9pt' }} onClick={() => handleSubMenuToggle('Languages')}>
              Languages*
            </button>
            {openSubMenu === 'Languages' && (
              <div className="submenu-container">
                <Link href="/languages/classical-greek" className="block px-4 py-2" onClick={closeMenus}>
                  Classical Greek
                </Link>
                <Link href="/languages/modern-greek" className="block px-4 py-2" onClick={closeMenus}>
                  Modern Greek
                </Link>
                <Link href="/components/english" className="block px-4 py-2" onClick={closeMenus}>
                  English Grammar*
                </Link>
                <Link href="/languages/spanish" className="block px-4 py-2" onClick={closeMenus}>
                  Spanish
                </Link>
                <Link href="/languages/danish" className="block px-4 py-2" onClick={closeMenus}>
                  Danish
                </Link>
                <Link href="/languages/chinese" className="block px-4 py-2" onClick={closeMenus}>
                  Chinese
                </Link>
              </div>
            )}
          </div>

          {/* Physics Menu */}
          <div className="relative">
            <button className="menu-item" style={{ fontSize: '9pt' }} onClick={() => handleSubMenuToggle('Physics')}>
              Physics
            </button>
            {openSubMenu === 'Physics' && (
              <div className="submenu-container">
                <Link href="/physics/classical" className="block px-4 py-2" onClick={closeMenus}>
                  Classical
                </Link>
                <Link href="/physics/quantum" className="block px-4 py-2" onClick={closeMenus}>
                  Quantum
                </Link>
                <Link href="/physics/chemistry" className="block px-4 py-2" onClick={closeMenus}>
                  Chemistry
                </Link>
              </div>
            )}
          </div>

          {/* Math Menu */}
          <div className="relative">
            <button className="menu-item" style={{ fontSize: '9pt' }} onClick={() => handleSubMenuToggle('Math')}>
              Math
            </button>
            {openSubMenu === 'Math' && (
              <div className="submenu-container">
                <Link href="/math/perfect-numbers" className="block px-4 py-2" onClick={closeMenus}>
                  Perfect Numbers
                </Link>
                <Link href="/math/prime-numbers" className="block px-4 py-2" onClick={closeMenus}>
                  Prime Numbers
                </Link>
                <Link href="/math/friendly-numbers" className="block px-4 py-2" onClick={closeMenus}>
                  Friendly Numbers
                </Link>
                <Link href="/math/trigonometry" className="block px-4 py-2" onClick={closeMenus}>
                  Trigonometry
                </Link>
              </div>
            )}
          </div>

          {/* Content Request Link */}
          <Link href="#" className="block px-4 py-2 hover:text-gray-300 menu-item" style={{ fontSize: '9pt' }} onClick={handleFormToggle}>
            Content Request
          </Link>
        </nav>

        {/* Profile and User Actions */}
        <div className="flex space-x-4 items-center">
          {!userId ? (
            <>
              <Link href="/sign-in" className="block px-4 py-2 hover:text-gray-300 small-font">Sign in</Link>
              <Link href="/sign-up" className="block px-4 py-2 hover:text-gray-300 small-font">Sign up</Link>
            </>
          ) : (
            <>
              <Link href="/profile" className="block px-4 py-2 hover:text-gray-300 small-font">Profile</Link>
              <UserButton />
            </>
          )}
        </div>
      </div>

      {/* Content Request Form */}
      {formOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Content Request Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="request">
                  Request
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="request"
                  name="request"
                  placeholder="Your request"
                  maxLength={100} /* Limits the input to 100 characters */
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarDesktop;

