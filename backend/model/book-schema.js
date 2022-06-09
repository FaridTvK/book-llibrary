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
    imageUrl: {
        type:String,
        required: true
    }

},{collection: "Books"})

export default mongoose.model("Books", BookSchema)