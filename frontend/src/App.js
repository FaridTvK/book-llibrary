import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import BookForm from './components/BookForm';

function App() {
	const [books, setBooks] = useState([]);
	const [searchText, setSearchText] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const lookupBooks = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ searchText })
		};
    console.log("das geht")
		const response = await fetch('http://localhost:3003/searchbook', requestOptions);
		const books = await response.json();
		setBooks([...books]);
	}

	useEffect(() => {
		lookupBooks();
	}, []);

	const handleButtonClick = () => {
		lookupBooks();
	}

	return (
		<div className="App">
			{books.length === 0 && (
				<div>Loading...</div>
			)}
			{books.length > 0 && (
				<>
					<input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
					<button onClick={handleButtonClick}>Search</button>
					<div>
						There are {books.length} books:
					</div>
					<ul>
						{books.map((book, i) => {
							return (
								<>
								<li key={i}>{book.title}</li>
								<li> <input type="checkbox" onChange={(e)=>{}}/> </li>
								</>
							)
						})}
					</ul>
					<BookForm books={books}/>
				</>
			)}
			<Routes>
				<Route path='/add' element={<BookForm books={books} setBooks={setBooks}/>}/>
			</Routes>
		</div>
	)
}

export default App
