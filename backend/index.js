import express from "express";
import cors from "cors";
import { PORT, MONGO_URI } from "./config.js";
import mongoose, { mongo } from "mongoose";
import book_routes from "./routes/book_routes.js";

const app = express();

app.use(express.json());
app.use(cors())

mongoose
    .connect(MONGO_URI)
    .then( () => {
        console.log("App is connected to a database");
        app.listen(PORT, () => {
            console.log(`Server listen to a port ${PORT}`);
        });
    })
    .catch( (error) => {
        console.log(error);
    });

app.get('/', (req, res) => {
    res.send("Welcome to my mern project");
});

app.use('/books', book_routes);

