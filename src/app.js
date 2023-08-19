import express from "express";

import database from "./config/mongoDb.js";
import routes from "./routes/index.js";

database.on("error", console.error.bind(console, "MongoDB connection error:"));
database.once("open", () => console.log("Connected to MongoDB"));

const app = express();

routes(app);

// app.get("/books/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const book = findBook(id);

//   if (!book) {
//     return res.status(404).send("Book not found");
//   }

//   res.status(200).json(book);
// });

// app.put("/books/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const book = findBook(id);

//   console.log(book);

//   if (!book) {
//     return res.status(404).send("Book not found");
//   }

//   const { title, author } = req.body;

//   const bookInfoUpdate = { id, title, author };

//   books[books.indexOf(book)] = bookInfoUpdate;

//   res.status(200).send("Book updated successfully");
// });

// app.delete("/books/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const book = findBook(id);

//   if (!book) {
//     return res.status(404).send("Book not found");
//   }

//   books.splice(books.indexOf(book), 1);

//   res.status(200).send("Book deleted successfully");

//   console.log(books);
// });

// function findBook(id) {
//   console.log(typeof id);
//   books.forEach((book) => console.log(typeof book.id));

//   return books.find((book) => book.id === id);
// }

export default app;
