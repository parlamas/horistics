// src/lib/db.ts
import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI_LOCAL;

let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<Db> {
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  if (cachedDb) {
    return cachedDb;
  }

  try {
    const client = await MongoClient.connect(uri, {});  // Removed deprecated options
    cachedDb = client.db();
    return cachedDb;
  } catch {
    throw new Error('Failed to connect to the database'); // Removed unused error variable
  }
}
