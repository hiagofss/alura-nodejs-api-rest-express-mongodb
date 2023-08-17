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
