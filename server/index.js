import './config.js';
import express from "express";
import cors from "cors";
import multer from 'multer';
import { addItem, deleteItem, editItem, getInventar, getOneItem } from './controller/inventarController.js';



const PORT = process.env.PORT;
const app = express();

const upload = multer({ dest: "./public" });

// middleware
app.use(express.json());
app.use(cors());
app.use('/public', express.static('./public'));


// GET 
app.get('/api/category/:category', getInventar);

// GET - ONE ITEM
app.get('/api/edit/:id', getOneItem);

// POST
app.post("/api/add", upload.single("image"), addItem);

// PUT
app.put("/api/update/:id", upload.single("image"), editItem);

// DELETE
app.delete("/app/delete/:id", deleteItem);

app.listen(PORT, () => console.log("Server is listening on PORT", PORT));