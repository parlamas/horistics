// src/lib/db.ts

import { MongoClient, Db } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(uri: string): Promise<Db> {
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local or .env.production');
  }

  // Return cached database connection if available
  if (cachedDb) {
    return cachedDb;
  }

  // Establish a new connection if one isn't already cached
  try {
    if (!cachedClient) {
      cachedClient = new MongoClient(uri); // Creating MongoClient instance
      await cachedClient.connect(); // Connect to MongoDB
    }

    cachedDb = cachedClient.db(); // Connect to the default database in the URI
    console.log('Connected to MongoDB successfully');
    
    return cachedDb;
  } catch (error) {
    console.error('Failed to connect to the database', error);
    throw new Error('Failed to connect to the database');
  }
}
