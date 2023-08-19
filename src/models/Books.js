import mongoose, { Schema } from "mongoose";

class Book {
  static schema = new Schema({
    id: { type: String },
    title: { type: String, required: true },
    author: { type: String, required: true },
    publisher: { type: String, required: true },
    numberOfPage: { type: Number },
  });
}

export default mongoose.model("books", Book.schema);
