import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import BookForm from './components/BookForm';
import Header from "./components/Header";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Header />
    <Routes>
				<Route path="/" element={<App />}/>
				<Route path="/add" element={<BookForm />}/>
				{/* <Route path="/favourite" element={<FavouriteBooks />}/> */}
			</Routes>
    </BrowserRouter>
  </React.StrictMode>
);
