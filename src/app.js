import express from "express";

import database from "./config/mongoDb.js";

import books from "./models/Books.js";

database.on("error", console.error.bind(console, "MongoDB connection error:"));
database.once("open", () => console.log("Connected to MongoDB"));

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    let booksResult = await books.find();

    res.status(200).json(booksResult);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = findBook(id);

  if (!book) {
    return res.status(404).send("Book not found");
  }

  res.status(200).json(book);
});

app.post("/books", (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).send("Book added to the database");
});

app.put("/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = findBook(id);

  console.log(book);

  if (!book) {
    return res.status(404).send("Book not found");
  }

  const { title, author } = req.body;

  const bookInfoUpdate = { id, title, author };

  books[books.indexOf(book)] = bookInfoUpdate;

  res.status(200).send("Book updated successfully");
});

app.delete("/books/:id", (req, res) => {
  const id = Number(req.params.id);

  const book = findBook(id);

  if (!book) {
    return res.status(404).send("Book not found");
  }

  books.splice(books.indexOf(book), 1);

  res.status(200).send("Book deleted successfully");

  console.log(books);
});

function findBook(id) {
  console.log(typeof id);
  books.forEach((book) => console.log(typeof book.id));

  return books.find((book) => book.id === id);
}

export default app;
