import { MongoClient, Db } from "mongodb";
import config from "../config/config";

const uri = config.MONGODBURI;
const client = new MongoClient(uri);
let db: Db | null = null;
export async function getDB(): Promise<Db> {
  if (!db) {
    await client.connect();
    db = client.db("saveCode");

    console.log("Connected to MongoDB");
  }
  return db;
}
