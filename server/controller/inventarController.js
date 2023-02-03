import { getDb } from "../db/connect.js";
import mongodb from "mongodb";
// Controller für die Routen anlegen
// Dao objekt??



// GET
export const getInventar = async (req, res) => {

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

};

export const getOneItem = async (req, res) => {

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

};

// DELETE
export const deleteItem = async (req, res) => {
    const id = req.params.id;

    try {
        const db = await getDb();
        const result = await db.collection("items").deleteOne({ _id: new ObjectId(id) });
        res.json(result);
    } catch (error) {
        console.error(error);
    }
};

// PUT
export const editItem = async (req, res) => {
    const id = req.params.id;
    console.log(req.file);
    console.log(req.body);
    const item = {
        name: req.body.name,
        room: req.body.room,
        category: req.body.category,
        description: req.body.description,
        path: req.file.path
    };

    console.log(item);
    // const id = req.body.id;

    try {
        const db = await getDb();
        const result = await db.collection("items").updateOne({ "_id": mongodb.ObjectId(id) }, { $set: { ...item } });
        res.json(result);

    } catch (error) {
        console.error(error);
    }
};

// POST
export const addItem = async (req, res) => {
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

};