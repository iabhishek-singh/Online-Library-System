
import { Link } from "react-router-dom";
import "./style.css";
function BookList({ booksData }) {
    return (
        <div className="bookList text-center">
            {booksData.map((book) => (
                <div className="book-card" key={book.id}>
                    <img src={book.coverImage} alt="CoverImage" className="book-cover" />
                    <h2 className="book-title"> {book.title} </h2>
                    <h2 className="book-author"> {book.author} </h2>
                    <h2 className="book-description"> {book.description} </h2>
                    <h2 className="book-page"> {book.page} </h2>
                    <Link to={`/book/${book.id}`} className="text-blue-500 underline">
                        View Details
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default BookList;


// import { Link } from "react-router-dom";

// function BookList({ booksData }) {
//     return (
//         <div className="book-list">
//             {booksData.map((book) => (
//                 <div className="book-card" key={book.id}>
//                     <img src={book.coverImage} alt="Cover" width="200px" />
//                     <h2>{book.title}</h2>
//                     <h3>{book.author}</h3>
//                     <Link to={`/book/${book.id}`} className="text-blue-500 underline">
//                         View Details
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default BookList;