import './config.js';
import express from "express";
import cors from "cors";
import { getDb } from './db/connect.js';
import multer from 'multer';
import { v2 as cloudinary } from "cloudinary";



const PORT = process.env.PORT;
const app = express();

const upload = multer({ dest: "./public" });

// middleware
app.use(express.json());
app.use(cors());



app.get('/api/:category', async (req, res) => {
    const categoryName = req.params.category;
    try {
        const db = await getDb();
        const findItems = await db.collection("items").find({ category: categoryName });
        const pointer = await findItems.toArray();
        res.status(200).json(pointer);

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

// app.get('/api/bigStuff', (req, res) => {
//     res.json({ msg: "HELLO" });
// });

// app.get('/api/middleStuff', (req, res) => {

// });

// app.get('/api/smallStuff', (req, res) => {

// });

app.post("/api/add", upload.single("image"), async (req, res) => {
    const item = req.body;
    item.path = req.file.path;

    console.log(item);
    console.log(req.file);


    const db = await getDb();
    const test = await db.collection("items").insertOne(item);
    res.status(200).json(test);
});


app.listen(PORT, () => console.log("Server is listening on PORT", PORT));