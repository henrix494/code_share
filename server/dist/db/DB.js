"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDB = getDB;
const mongodb_1 = require("mongodb");
const config_1 = __importDefault(require("../config/config"));
const uri = config_1.default.MONGODBURI;
const client = new mongodb_1.MongoClient(uri);
let db = null;
async function getDB() {
    if (!db) {
        await client.connect();
        db = client.db("saveCode");
        console.log("Connected to MongoDB");
    }
    return db;
}
