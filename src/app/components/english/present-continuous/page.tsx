// src/app/components/english/present-continuous/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import BubbleTexts from '../../../components/BubbleTexts';
import BubbleTexts2 from '../../../components/BubbleTexts2';
import BubbleTexts3 from '../../../components/BubbleTexts3';
import FlagSelector from '../../../components/FlagSelector';
import ContentSection from '../../../components/ContentSection';
import ContentSection2 from '../../../components/ContentSection2';
import ContentSection3 from '../../../components/ContentSection3';

// Define the valid language keys as a TypeScript type
type Language = 'en' | 'gr' | 'es' | 'pl' | 'dk' | 'fr' | 'pt' | 'it' | 'de' | 'ua' | 'ru' | 'zh' | 'eg' | 'ir' | 'tr' | 'in' | 'jp' | 'kr' | 'il';

const PresentContinuousPage: React.FC = () => {
  // State for the first language and RTL detection
  const [language, setLanguage] = useState<Language>('en');
  const isRTL = ['il', 'eg', 'ir'].includes(language);

  // State for the second language and RTL detection
  const [language2, setLanguage2] = useState<Language>('en');
  const isRTL2 = ['il', 'eg', 'ir'].includes(language2);

  // State for the 3rd language and RTL detection
  const [language3, setLanguage3] = useState<Language>('en');
  const isRTL3 = ['il', 'eg', 'ir'].includes(language3);

  const handleLanguageChange = (lang: Language) => setLanguage(lang);
  const handleLanguageChange2 = (lang: Language) => setLanguage2(lang);
  const handleLanguageChange3 = (lang: Language) => setLanguage3(lang);

  // Dynamic Font Resizing Logic for ContentSection and ContentSection2
  const contentRef = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);
  const contentRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeText = (ref: React.RefObject<HTMLDivElement>) => {
      const element = ref.current;
      if (!element) return;

      let fontSize = 16; // Start with a base font size
      element.style.fontSize = `${fontSize}px`;

      const containerHeight = element.parentElement?.offsetHeight || 0;
      while (element.scrollHeight > containerHeight && fontSize > 5) {
        fontSize -= 1;
        element.style.fontSize = `${fontSize}px`;
      }
    };

    // Apply resizing logic to both ContentSection and ContentSection2
    resizeText(contentRef);
    resizeText(contentRef2);

    // Add resize event listener for window resize
    const handleResize = () => {
      resizeText(contentRef);
      resizeText(contentRef2);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [language, language2]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      {/* Burger Menu */}
      <Menu
        styles={{
          bmBurgerButton: {
            position: 'fixed',
            margin: '50px',
            width: '18px',
            height: '15px',
            left: '20px',
            top: '20px',
            zIndex: '100',
          },
          bmBurgerBars: { background: 'lime' },
          bmMenuWrap: { width: '200px' },
          bmMenu: { background: 'white', padding: '2.5em 1.5em 0' },
          bmOverlay: { background: 'rgba(0, 0, 0, 0.3)' },
        }}
      >
        <div style={{ marginTop: '50px' }}>
          <ul style={{ fontSize: '9pt', color: 'blue', marginLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}>
    <Link href="/" style={{ textDecoration: 'none' }}>
      Home
    </Link>
  </li>
            <li>
              <Link href="/components/english">English Grammar</Link>
            </li>
            <li>
              <Link href="/components/english/present-continuous">Present Continuous</Link>
            </li>
            <li>
              <Link href="/languages/english/present-simple">Present Simple</Link>
            </li>
            <li>
              <Link href="/languages/english/present-perfect-continuous">Present Perfect Continuous</Link>
            </li>
          </ul>
        </div>
      </Menu>

      {/* Page content 1st image */}
      <div style={{ padding: '20px', flex: 1, backgroundColor: '#fff', position: 'relative' }}>
        <h2 style={{ textAlign: 'center' }}><span style={{ color:'red', fontWeight:'bold'}}>1.</span> Present Continuous ( I am working )</h2>
  
        <div className="image-container">
          <figure style={{ margin: '0 auto', maxWidth: '600px', textAlign: 'center' }}>
            <Image
              src="/images/eg/present-continuous-001.webp"
              alt="Present Continuous Example"
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          {/* FlagSelector */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <FlagSelector handleLanguageChange={handleLanguageChange} />
          </div>

          {/* Bubbles with Translations */}
          <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', zIndex: 5 }}>
            <BubbleTexts language={language} isRTL={isRTL} />
          </div>

          {/* Additional Content with Steady Height and Dynamic Font Resizing */}
          <div style={{ position: 'relative', zIndex: 5, height: '200px', overflow: 'hidden', backgroundColor: 'lightgray' }}>
            <div ref={contentRef} style={{ padding: '10px' }}>
              <ContentSection language={language} isRTL={isRTL} />
            </div>
          </div>
        </div>
      </div>

      {/* Page content 2nd image */}
      <div style={{ padding: '20px', flex: 1, backgroundColor: '#fff', position: 'relative' }}>
        <h2 style={{ textAlign: 'center' }}><span style={{ color:'red', fontWeight:'bold'}}>2.</span> Present Simple ( I work )</h2>

        <div className="image-container">
          <figure style={{ margin: '0 auto', maxWidth: '600px', textAlign: 'center' }}>
            <Image
              src="/images/eg/present-continuous-002.webp"
              alt="Present Simple Example"
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          {/* FlagSelector for second section */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <FlagSelector handleLanguageChange={handleLanguageChange2} />
          </div>

          {/* Bubbles with Translations for second section */}
          <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', zIndex: 5 }}>
            <BubbleTexts2 language={language2} isRTL={isRTL2} />
          </div>

          {/* Additional Content with Steady Height for second section */}
          <div style={{ position: 'relative', zIndex: 5, height: '200px', overflow: 'hidden', backgroundColor: 'lightgray' }}>
            <div ref={contentRef2} style={{ padding: '10px' }}>
              <ContentSection2 language={language2} isRTL={isRTL2} />
            </div>
          </div>
        </div>
      </div>

      {/* Page content 3rd image */}
      <div style={{ padding: '20px', flex: 1, backgroundColor: '#fff', position: 'relative' }}>
        <h2 style={{ textAlign: 'center' }}><span style={{ color:'red', fontWeight:'bold'}}>3.</span> Present Perfect Continuous<br />( I have been working )</h2>

        <div className="image-container">
          <figure style={{ margin: '0 auto', maxWidth: '600px', textAlign: 'center' }}>
            <Image
              src="/images/eg/ppc-003.png"
              alt="Present Simple Example"
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>

          {/* FlagSelector for third section */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <FlagSelector handleLanguageChange={handleLanguageChange3} />
          </div>

          {/* Bubbles with Translations for third section */}
          <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', zIndex: 5 }}>
            <BubbleTexts3 language={language3} isRTL={isRTL3} />
          </div>

          {/* Additional Content with Steady Height for third section */}
          <div style={{ position: 'relative', zIndex: 5, height: '200px', overflow: 'hidden', backgroundColor: 'lightgray' }}>
            <div ref={contentRef3} style={{ padding: '10px' }}>
              <ContentSection3 language={language3} isRTL={isRTL3} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PresentContinuousPage;
