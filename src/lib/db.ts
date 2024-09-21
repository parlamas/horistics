// src/lib/db.ts

import { MongoClient, Db } from 'mongodb';

const uri = process.env.NODE_ENV === 'development'
  ? process.env.MONGODB_URI_LOCAL
  : process.env.MONGODB_URI_REMOTE;

let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<Db> {
  if (!uri) {
    throw new Error('MongoDB URI is required');
  }

  if (cachedDb) {
    return cachedDb;
  }

  try {
    const client = await MongoClient.connect(uri, {});
    cachedDb = client.db();
    return cachedDb;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Failed to connect to the database');
  }
}
