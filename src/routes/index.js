import express from "express";
import BooksRoutes from "./BooksRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.send("GET request successful!");
  });

  app.use(express.json(), BooksRoutes);
};

export default routes;
