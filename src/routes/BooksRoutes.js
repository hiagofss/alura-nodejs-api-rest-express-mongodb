import { Router } from "express";
import BooksController from "../controllers/BooksController.js";

const router = Router();

router
  .get("/books", BooksController.getBooks)
  .post("/books", BooksController.createBook)
  .put("/books/:id", BooksController.updateBook)
  .get("/books/:id", BooksController.getBookById)
  .delete("/books/:id", BooksController.deleteBookById);

// router.get("/books", (req, res) => {
//   res.status(200).json(books);
// });

// router.get("/books/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const book = findBook(id);

//   if (!book) {
//     return res.status(404).send("Book not found");
//   }

//   res.status(200).json(book);
// });

// router.put("/books/:id", (req, res) => {
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

export default router;
