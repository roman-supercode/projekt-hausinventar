import './config.js';
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getDb } from './db/connect.js';
import { Db } from 'mongodb';


const PORT = process.env.PORT;
const app = express();


app.use(express.json());
app.use(cors());


app.get('/api/:category', async (req, res) => {
    const category = req.params.category;

    const db = await getDb();
    const findItems = await db.collection("items").find({ category: category });
    const pointer = await findItems.toArray();
    res.status(200).json(pointer);
});

// app.get('/api/bigStuff', (req, res) => {
//     res.json({ msg: "HELLO" });
// });

// app.get('/api/middleStuff', (req, res) => {

// });

// app.get('/api/smallStuff', (req, res) => {

// });

app.post("/api", async (req, res) => {
    const item = req.body;

    const db = await getDb();
    const test = await db.collection("items").insertOne(item);
    res.status(200).json(test);
});


app.listen(PORT, () => console.log("Server is listening on PORT", PORT));