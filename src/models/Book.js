import mongoose, { Schema, mongo } from "mongoose";

class Book {
  static schema = new Schema({
    id: { type: String },
    title: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors",
      required: true,
    },
    publisher: { type: String, required: true },
    numberOfPages: { type: Number },
  });
}

export default mongoose.model("books", Book.schema);
