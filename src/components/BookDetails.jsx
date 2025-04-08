
// Book details for Book with id

import { useParams, Link } from "react-router-dom";
import { Books } from "../utils/mockData";
import "./style.css"
import { Error } from "./Error";

function BookDetails() {
    const params = useParams();
    const book = Books.filter((book) => book.id == params.id);

    // If no book found, show Error component
    if (book.length === 0) {
        return <Error />;
    }
    return (
        <div>
            <div className="cont">
                {/* <h1>{`Book details for Book with id ${params.id}`}</h1> */}
                {book.map((book) => {
                    return (
                        <div className="bookDetailsForEachBook " key={book.id}>
                            <img src={book.coverImage} alt="" />
                            <h2 className="BookTitle">{book.title}</h2>
                            <h2 className="BookAuthor">{book.author}</h2>
                            <h2 className="BookDescription">{book.description}</h2>
                            <h2 className="BookCategory">{book.category}</h2>
                            <h2 className="BookPage">{book.page}</h2>
                            <h2 className="BookPublishDate">{book.publishDate}</h2>

                        </div>

                    )
                })}

            </div>
            <br /><br /><br />
            <h1 className="text-2xl text-center text-blue-700 hover:underline"><Link to="/BrowseBook">Back to Browse</Link></h1>
        </div>
    )
}
export default BookDetails;