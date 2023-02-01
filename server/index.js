import './config.js';
import express from "express";
import cors from "cors";
import { getDb } from './db/connect.js';
import multer from 'multer';
import { v2 as cloudinary } from "cloudinary";
import mongodb from "mongodb";



const PORT = process.env.PORT;
const app = express();

const upload = multer({ dest: "./public" });

// middleware
app.use(express.json());
app.use(cors());
app.use('/public', express.static('./public'));



app.get('/api/category/:category', async (req, res) => {
    const categoryName = req.params.category;
    try {
        const db = await getDb();
        const findItems = await db.collection("items").find({ category: categoryName });
        const pointer = await findItems.toArray();
        res.status(200).json(pointer);

    } catch (error) {
        console.log(error);
        res.status(400).json("Something wrong with GET", error);
    }
});

app.get('/api/edit/:id', async (req, res) => {
    const id = req.params.id;
    const filter = { "_id": mongodb.ObjectId(id) };

    try {
        const db = await getDb();
        const findItem = await db.collection("items").findOne(filter);
        res.status(200).json(findItem);

    } catch (error) {
        console.log(error);
        res.status(400).json("Something wrong with GET", error);
    }
});


app.post("/api/add", upload.single("image"), async (req, res) => {

    const item = req.body;
    item.path = req.file.path;

    // console.log(item);
    // console.log(req.file);
    try {
        const db = await getDb();
        const newItem = await db.collection("items").insertOne(item);
        res.status(200).json(newItem);

    } catch (error) {
        res.status(400).send("Something wrong with POST", error);
    }
});


app.listen(PORT, () => console.log("Server is listening on PORT", PORT));