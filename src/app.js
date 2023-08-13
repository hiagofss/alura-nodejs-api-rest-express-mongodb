import express from "express";

const app = express();

app.use(express.json());

const books = [
  { id: 1, title: "Harry Potter", author: "J. K. Rowling" },
  { id: 2, title: "Lord of the Rings", author: "J. R. R. Tolkien" },
];

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.post("/books", (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).send("Book added to the database");
});

export default app;
