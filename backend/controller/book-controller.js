import BookSchema from "../model/book-schema.js";
import axios from "axios";

const addBook = async (req,res) => {
    const newBook = new BookSchema(req.body)
    await newBook.save()
    res.send("new Book added!")
}

const updateBook = async (req ,res ) => {
    const _id = req.params.id
    await BookSchema.findByIdAndUpdate( _id, req.body)
    res.send("Book has updated")
}

const deleteBook = async (req , res) => {
    const _id = req.params.id;
    await BookSchema.findByIdAndDelete(_id)
    res.send("Book has deleted")
}

const searchBook =  async (req, res, next) => {
	try {const searchText = req.body.searchText;
	console.log(searchText);
	const books = await getBooks(req.body.searchText);
	res.json(books);}
    catch(err){
        next(err)
    }
}

const getBooks = async (searchText) => {
	const books = [];
	const url = `https://gutendex.com/books/?search=${searchText}`;
	console.log(url);
	const response = await axios.get(url);
	const rawBooks = response.data.results;
	rawBooks.forEach(rawBook => {
		books.push({
			title: rawBook.title
		});
	})
	return books;
}



export {addBook , updateBook, deleteBook , searchBook}