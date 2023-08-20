import Authors from "../models/Author.js";

class AuthorsController {
  async getAuthors(req, res) {
    try {
      let AuthorsResult = await Authors.find();

      res.status(200).json(AuthorsResult);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async createAuthor(req, res) {
    let author = new Authors(req.body);

    try {
      await author.save();
    } catch (error) {
      res.status(500).json(error.message);
    }

    res.status(201).json(author);
  }

  async updateAuthor(req, res) {
    let { id } = req.params;

    try {
      await Authors.findByIdAndUpdate(id, {
        $set: req.body,
      });

      res.status(200).send({ message: "Author updated successfully" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getAuthorById(req, res) {
    let { id } = req.params;

    try {
      const author = await Authors.findById(id);

      if (!author) {
        res.status(404).send("Author not found");
      }

      res.status(200).json(author);
    } catch (error) {
      res.status(500).json(error.message);
    }
    return Authors.findById(id);
  }

  async deleteAuthorById(req, res) {
    let { id } = req.params;

    try {
      await Authors.findByIdAndDelete(id);

      res.status(200).send({ message: `Author ${id} deleted successfully` });
    } catch (error) {
      res.status(500).json(error.message);
    }
    return Authors.findById(id);
  }
}

export default new AuthorsController();
