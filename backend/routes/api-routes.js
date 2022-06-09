import express from "express";
import { addBook, deleteBook, searchBook, updateBook } from "../controller/book-controller.js";
import { validateMyRequest } from "../middelware/validate-schema.js";
import { bookSchemaValidator } from "../Schema/book-schema-validator.js";


const router = express.Router()

router.route("/search")
      .post(searchBook)

router.route("/books")
      // .post(bookSchemaValidator)
      .post(bookSchemaValidator,addBook)


router.route("/:id")
      .put(updateBook)
      .delete(deleteBook)

export default router;