//scripts/seedTranslations.js
// Load environment variables from .env.local or .env file
// Manually specify the path to the .env.local file
require('dotenv').config({ path: './.env.local' });

const { MongoClient } = require('mongodb');
const diacritics = require('diacritics');

// MongoDB connection string from environment variables
const uri = process.env.MONGODB_URI_LOCAL;

// Debug log to confirm if the URI is loaded correctly from the environment
console.log("MongoDB URI from .env.local:", uri);

if (!uri) {
    console.error("MongoDB URI is not loaded. Check your .env.local file.");
    process.exit(1);  // Stop the script if the URI is not found
}

async function seedTranslations() {
    // Initialize MongoClient with the connection string
    const client = new MongoClient(uri);

    try {
        // Connect to MongoDB
        await client.connect();
        const db = client.db('hellas');  // Replace with your actual DB name
        const translations = db.collection('translations');

        // Example Greek word
        const greekWord = "χθὲς";

        // Normalize the Greek word to ensure consistency (NFC normalization form)
        const normalizedGreekWord = greekWord.normalize('NFC');

        // Remove diacritics from the normalized word
        const strippedGreekWord = diacritics.remove(normalizedGreekWord);

        // Insert the translation into MongoDB
        await translations.insertOne({
            greek: normalizedGreekWord,          // Original word with diacritics
            greek_stripped: strippedGreekWord,   // Word without diacritics
            english: "yesterday"                 // English translation
        });

        console.log("Translation inserted successfully!");
    } catch (error) {
        console.error("Error inserting translation:", error);
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
}

// Execute the seeding function
seedTranslations();
