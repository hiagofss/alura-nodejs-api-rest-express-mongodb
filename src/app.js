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

app.get("/books/:id", (req, res) => {
  const { id } = req.params;

  const book = findBook(Number(id));

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

function findBook(id) {
  console.log(typeof id);
  books.forEach((book) => console.log(typeof book.id));

  return books.find((book) => book.id === id);
}

export default app;
