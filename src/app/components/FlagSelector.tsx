// src/app/components/FlagSelector.tsx
import React from 'react';
import Image from 'next/image';

// Define the valid language keys as a TypeScript type
type Language = 'en' | 'gr' | 'es' | 'pl' | 'dk' | 'fr' | 'pt' | 'it' | 'de' | 'ua' | 'ru' | 'zh' | 'eg' | 'ir' | 'tr' | 'in' | 'jp' | 'kr' | 'il';

// Define the prop types for the FlagSelector component
interface FlagSelectorProps {
  handleLanguageChange: (lang: Language) => void;
}

const FlagSelector: React.FC<FlagSelectorProps> = ({ handleLanguageChange }) => {
  return (
    <div
      style={{
        marginTop: '10px',
        backgroundColor: 'olive',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '100%',
        border: '2px dotted white',
        padding: '10px',
      }}
    >
      {[
        { lang: 'gr', flag: '/images/gr.webp', alt: 'Greek Flag' },
        { lang: 'en', flag: '/images/us.webp', alt: 'USA Flag' },
        { lang: 'es', flag: '/images/es.webp', alt: 'Spanish Flag' },
        { lang: 'pl', flag: '/images/pl.webp', alt: 'Polish Flag' },
        { lang: 'dk', flag: '/images/dk.webp', alt: 'Danish Flag' },
        { lang: 'fr', flag: '/images/fr.webp', alt: 'French Flag' },
        { lang: 'pt', flag: '/images/pt.webp', alt: 'Portuguese Flag' },
        { lang: 'it', flag: '/images/it.webp', alt: 'Italian Flag' },
        { lang: 'de', flag: '/images/de.webp', alt: 'German Flag' },
        { lang: 'ua', flag: '/images/ua.webp', alt: 'Ukranian Flag' },
        { lang: 'ru', flag: '/images/ru.webp', alt: 'Russian Flag' },
        { lang: 'zh', flag: '/images/cn.webp', alt: 'Chinese Flag' },
        { lang: 'jp', flag: '/images/jp.webp', alt: 'Japanese Flag' },
        { lang: 'kr', flag: '/images/kr.webp', alt: 'Korean Flag' },
        { lang: 'il', flag: '/images/il.webp', alt: 'Israeli Flag' },
        { lang: 'eg', flag: '/images/eg.webp', alt: 'Egyptian Flag' },
        { lang: 'ir', flag: '/images/ir.webp', alt: 'Iranian Flag' },
        { lang: 'tr', flag: '/images/tr.webp', alt: 'Turkish Flag' },
        { lang: 'in', flag: '/images/in.webp', alt: 'Indian Flag' },
        // Add more flags here
      ].map(({ lang, flag, alt }) => (
        <Image
          key={lang}
          src={flag}
          alt={alt}
          width={24}
          height={24}
          style={{ cursor: 'pointer', margin: '5px' }}
          onClick={() => handleLanguageChange(lang as Language)}
        />
      ))}
    </div>
  );
};

export default FlagSelector;

