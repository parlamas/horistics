// src/app/api/search/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db';

// Helper function to fetch data from an external API
async function getData() {
    const apiUrl = process.env.API_URL || 'https://default-api-url.com';
  
    const response = await fetch(`${apiUrl}`);
    const data = await response.json();
    return data;
}

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
        // Choose the appropriate URI based on environment
        const uri = process.env.NODE_ENV === 'development' 
            ? process.env.MONGODB_URI_LOCAL 
            : process.env.MONGODB_URI_REMOTE;

        if (!uri) {
            throw new Error("No MongoDB URI specified");
        }

        const db = await connectToDatabase();  // No need to pass the URI, it's handled internally

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

        // Fetch additional data from the external API
        const apiData = await getData();
        console.log("External API data:", apiData);

        // You can choose to combine the API data and database results
        const combinedResults = {
            databaseResults: results,
            externalApiData: apiData
        };

        return NextResponse.json(combinedResults);
    } catch (error) {
        // Debug log for catching any errors
        console.error("Error occurred:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
