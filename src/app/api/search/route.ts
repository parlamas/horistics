// src/app/api/search/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query');

    // Debug log to see if the query parameter is being received
    console.log("Received query:", query);

    if (!query) {
        console.log("No query provided");
        return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
    }

    try {
        const db = await connectToDatabase();

        // Debug log to check if the connection to the database is successful
        console.log("Connected to the database");

        const results = await db.collection('translations').find({
            english: { $regex: new RegExp(query, 'i') }  // 'i' flag for case-insensitive search
        }).toArray();

        // Debug log to see the results from the database
        console.log("Search results:", results);

        if (results.length === 0) {
            console.log(`No results found for "${query}"`);
            return NextResponse.json({ message: `No results found for "${query}". Please try another word.` });
        }

        return NextResponse.json(results);
    } catch (error) {
        // Debug log for catching any errors
        console.error("Error occurred:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
