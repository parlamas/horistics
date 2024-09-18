// src/app/components/english/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

const EnglishGrammarPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect if the screen size is small (mobile)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Run on load to set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle menu state
  const handleMenuStateChange = (state: { isOpen: boolean }) => {
    setMenuOpen(state.isOpen);
  };

  // Shared Sidebar Content
  const sidebarContent = (
    <ul style={{ listStyleType: 'none', padding: '0', fontSize: '10pt' }}>
      <li style={{ marginBottom: '10px' }}>
    <Link href="/" style={{ textDecoration: 'none' }}>
      Home
    </Link>
  </li>
      <li style={{ marginBottom: '10px' }}>
        <Link href="/components/english/present-continuous" style={{ textDecoration: 'none' }}>
          Present Tenses
        </Link>
      </li>
      <li style={{ marginBottom: '10px' }}>
        <Link href="/languages/english/present-simple" style={{ textDecoration: 'none' }}>
          Past Tenses
        </Link>
      </li>
      <li style={{ marginBottom: '10px' }}>
        <Link href="/languages/english/present-perfect-continuous" style={{ textDecoration: 'none' }}>
          Future Tenses
        </Link>
      </li>
      <li style={{ marginBottom: '10px' }}>
        <Link href="/languages/english/present-perfect-continuous" style={{ textDecoration: 'none' }}>
          Conditional Tenses
        </Link>
      </li>
    </ul>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      
      {/* Conditional rendering: show burger menu on mobile */}
      {isMobile ? (
        <Menu
          isOpen={menuOpen} // Controlled by state
          onStateChange={handleMenuStateChange}
          styles={{
            bmBurgerButton: {
              position: 'fixed',
              width: '18px',
              height: '15px',
              left: '20px',
              top: '60px',
              zIndex: menuOpen ? '0' : '10', // Hide or show burger based on menu state
              display: menuOpen ? 'none' : 'block', // Hide the burger when menu is open
            },
            bmBurgerBars: {
              background: 'lime',
            },
            
            bmMenuWrap: {
              position: 'fixed',
              top: '0',
              left: '0',
              height: '100%',
              zIndex: '2000', // Ensure menu is above everything
            },
            bmMenu: {
              background: 'white',
              padding: '2.5em 1.5em 0',
              fontSize: '1.15em',
            },
            bmOverlay: {
              background: 'rgba(0, 0, 0, 0.3)',
              zIndex: '1500', // Overlay below menu but above page content
            },
          }}
        >
          <div style={{ color: '#000' }}>
            {sidebarContent}
          </div>
        </Menu>
      ) : (
        <div style={{ width: '250px', backgroundColor: 'brown', padding: '20px', boxSizing: 'border-box' }}>
          <div style={{ color: 'white' }}>
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <div style={{ flex: 1, padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
        <h1 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>English Grammar</h1>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>
          Select a grammar topic: here you will find content related to the use of tenses in English.
        </p>
      </div>
    </div>
  );
};

export default EnglishGrammarPage;