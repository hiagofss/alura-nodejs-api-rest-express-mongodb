import express from "express";
import BooksRoutes from "./BooksRoutes.js";
import AuthorsRoutes from "./AuthorsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.send("GET request successful!");
  });

  app.use(express.json(), BooksRoutes, AuthorsRoutes);
};

export default routes;
