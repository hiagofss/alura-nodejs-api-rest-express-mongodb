import { Router } from "express";
import BooksController from "../controllers/BooksController.js";

const router = Router();

router
  .get("/books", BooksController.getBooks)
  .post("/books", BooksController.createBook)
  .put("/books/:id", BooksController.updateBook)
  .get("/books/:id", BooksController.getBookById)
  .delete("/books/:id", BooksController.deleteBookById);

export default router;
