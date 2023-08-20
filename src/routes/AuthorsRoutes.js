import { Router } from "express";
import AuthorsController from "../controllers/AuthorsController.js";

const router = Router();

router
  .get("/authors", AuthorsController.getAuthors)
  .post("/authors", AuthorsController.createAuthor)
  .put("/authors/:id", AuthorsController.updateAuthor)
  .get("/authors/:id", AuthorsController.getAuthorById)
  .delete("/authors/:id", AuthorsController.deleteAuthorById);

export default router;
