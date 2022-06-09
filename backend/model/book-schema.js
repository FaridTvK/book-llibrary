import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    imageURL: {
        type:String,
        required: true
    }

},{collection: "Books"})

export default mongoose.model("Books", BookSchema)