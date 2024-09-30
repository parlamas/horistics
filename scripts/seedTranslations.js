//scripts/seedTranslations.js
// src/app/api/search/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db';
const diacritics = require('diacritics');  // Import the diacritics library

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

        const results = await db.collection('translations').find({
            $or: [
                { greek: { $regex: new RegExp(normalizedQuery, 'i') } },  // Match normalized word
                { greek_stripped: { $regex: new RegExp(strippedQuery, 'i') } }  // Match diacritic-free word
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
