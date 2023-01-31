import { MongoClient } from "mongodb"

const url = process.env.MONGO_URL

const client = new MongoClient(url)

let db;

export const getDb = async () => {
    if (db) return db
    await client.connect()
    db = client.db()
    return db
};