import { Books } from "../utils/mockData";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./browseBooks.css"
import { useSelector } from "react-redux";
// import BookList from "./BookList";


function BrowseBook() {

    const books = useSelector((state) => state.books.list);


    // Search
    const [searchTerm, setSearchTerm] = useState("");
    // Filter by search term
    const filtered = books.filter(
       (book)  =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div>
            {/* Search */}
            <div className="p-4">
                <div className="searchBook">
                    <h2 className="text-2xl font-bold mb-4">Search Books</h2>
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border-3 mb-6 max-w-md w-full hover:border-amber-600 hover:text-amber-800  inputeBoxs"
                    />
                </div>
                {filtered.length === 0 ? (
                    <p className="text-center mt-4 text-red-500">No books found.</p>
                ) : (
                    <div className="bookCard">
                        {filtered.map(book => (
                            <div key={book.id} className="bookdeatalis" >
                                <img src={book.coverImage} alt="" className="bookCover" />
                                <h2 className="booktitle"> {book.title} </h2>
                                <h2 className="bookauthor"> {book.author} </h2>
                                <h2 className="book-description"> {book.description} </h2>
                                <h2 className="book-page"> {book.page} </h2>
                                <h2 className="book-publishDate"> {book.publishDate} </h2>
                                <Link to={`/book/${book.id}`} className="text-blue-500 underline hover:text-gray-700">View Details</Link>
                            </div>
                        ))}

                    </div>
                )}
            </div>

        </div >
    )

}
export default BrowseBook;

