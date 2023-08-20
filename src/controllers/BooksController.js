import Books from "../models/Book.js";

class BooksController {
  async getBooks(req, res) {
    try {
      let booksResult = await Books.find().populate("author").exec();

      res.status(200).json(booksResult);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async createBook(req, res) {
    let book = new Books(req.body);

    try {
      await book.save();
    } catch (error) {
      res.status(500).json(error.message);
    }

    res.status(201).json(book);
  }

  async updateBook(req, res) {
    let { id } = req.params;

    try {
      await Books.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Book updated successfully" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getBookById(req, res) {
    let { id } = req.params;

    try {
      const book = await Books.findById(id).populate("author").exec();

      if (!book) {
        res.status(404).send("Book not found");
      }

      res.status(200).json(book);
    } catch (error) {
      res.status(500).json(error.message);
    }
    return Books.findById(id);
  }

  async deleteBookById(req, res) {
    let { id } = req.params;

    try {
      await Books.findByIdAndDelete(id);

      res.status(200).send({ message: `Book ${id} deleted successfully` });
    } catch (error) {
      res.status(500).json(error.message);
    }
    return Books.findById(id);
  }
}

export default new BooksController();
