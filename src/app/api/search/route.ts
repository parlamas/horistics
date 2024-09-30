// src/app/api/search/route.ts

// src/app/api/search/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db';
import diacritics from 'diacritics';


export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query');

    console.log("Received query:", query);

    if (!query) {
        return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
    }

    try {
        const uri = process.env.NODE_ENV === 'development' 
            ? process.env.MONGODB_URI_LOCAL 
            : process.env.MONGODB_URI_REMOTE;

        if (!uri) {
            throw new Error("No MongoDB URI specified");
        }

        const db = await connectToDatabase(uri);

        console.log("Connected to the database");

        // Normalize and strip the search query of diacritics
        const normalizedQuery = query.normalize('NFC');  // Normalize to NFC form
        const strippedQuery = diacritics.remove(normalizedQuery);  // Remove diacritics

        // Create a regular expression that ensures word boundaries around the query
        const wordBoundaryRegex = new RegExp(`\\b${normalizedQuery}\\b`, 'i');
        const strippedBoundaryRegex = new RegExp(`\\b${strippedQuery}\\b`, 'i');

        // Update query to use word boundaries for exact matches
        const results = await db.collection('translations').find({
            $or: [
                { greek: { $regex: wordBoundaryRegex } },        // Match normalized word with word boundaries
                { greek_stripped: { $regex: strippedBoundaryRegex } }  // Match diacritic-free word with boundaries
            ]
        }).toArray();

        console.log("Search results:", results);

        if (results.length === 0) {
            return NextResponse.json({ message: `No results found for "${query}". Please try another word.` });
        }

        return NextResponse.json(results);
    } catch (error) {
        console.error("Error occurred:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
