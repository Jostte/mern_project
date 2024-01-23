import express from "express";
import { Book } from "../models/book_models.js";

const router = express.Router();

// Insert a book
router.post('/', async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res.json({ message: "All fields are required" });
        }

        const newBook = {
            title: title,
            author: author,
            publishYear: publishYear,
        };


        // Create a book
        const bookObj = await Book.create(newBook);
        // bookObj.save();

        return res.json({ book: bookObj });

    } catch (error) {
        console.log(error.message);

        return res.json({ error: error.message });
    }
});

// Get all books
router.get('/', async(req, res) => {
    try {
        const books = await Book.find({});
        console.log(books);
        return res.json({ books: books });

    } catch (error) {
        console.log(error);
        return res.json({ error: error.message });
    }
});

// Get one book by Id
router.get('/:_id', async(req, res) => {

    try {
        const { _id } = req.params;
        const book = await Book.findById(_id);
        
        if(!book) {
            return res.json({ message: "The book was not found" });
        }

        console.log(book);
        return res.json({ books: book });

    } catch (error) {
        console.log(error);
        return res.json({ error: error.message });
    }
});

// Edit book
router.put('/:id', async(req, res) => {
    
    try {
        const { id } = req.params;

        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.send("All fields are required");
        }

        const book = await Book.findByIdAndUpdate(id, req.body);

        if (!book) {
            return res.json({ message: "The book was not found" });
        }

        return res.json({ message: "The book was updated successfully", books: book });
        

    } catch (error) {
        console.log(error);
        return res.json({ error: error.message });
    }
});

// Delete book
router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);

        if (!book) {
            return res.json({ message: "The book was not found" });
        }

        return res.json({ message: "The book was deleted successfully" });
    } catch (error) {
        console.log(error.message)
        return res.json({ error: error.message})
    }
});

export default router;