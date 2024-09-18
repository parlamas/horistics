// src/app/search-results/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

type SearchResult = {
    english: string;
    greek: string;
};

const SearchResults: React.FC = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const initialQuery = searchParams.get('query') || '';
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState<SearchResult[]>([]);
    const [notFound, setNotFound] = useState(false);

    // Fetch the results when the component loads or query changes
    useEffect(() => {
        if (query) {
            fetch(`/api/search?query=${encodeURIComponent(query)}`)
                .then((res) => res.json())
                .then((data) => {
                    if (Array.isArray(data)) {
                        setResults(data);
                        setNotFound(data.length === 0); // Set notFound to true if no results are returned
                    } else {
                        setResults([]);
                        setNotFound(true);
                    }
                })
                .catch((err) => {
                    console.error(err);
                    setResults([]);
                    setNotFound(true);
                });
        }
    }, [query]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/search-results?query=${encodeURIComponent(query)}`);
    };

    return (
        <div className="p-4">
            <Link href="/" style={{ textDecoration: 'none', color:'red' }}>
      Home
    </Link>
            <h1 className="mb-4">Search Results</h1>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="mb-4">
                <input
                    type="text"
                    placeholder="Search English to Classical Greek"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-2 py-1 rounded border"
                    style={{ fontSize: '10pt' }}
                />
            </form>

            {/* Displaying Results or Not Found Message */}
            {notFound ? (
                <p style={{ fontSize: '10pt' }}>
                    No results found for &quot;{query}&quot;. Please try another word.
                </p>
            ) : (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>
                            {result.english} - <span style={{ color: 'blue' }}>{result.greek}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchResults;
