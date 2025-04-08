import { Link, useParams } from "react-router-dom";
import { Books } from "../utils/mockData";
import "./style.css";

// it's return the books details
function Book(props) {

    const params = useParams();
    const book = Books.filter((book) => book.id == params.id);



    return (
        <div>
            <div className="book-card" >
                <img src={props.bookDeatails.coverImage}
                    alt="Cover image" width="300px" className="book-cover" />
                <div className="book-deatalis">
                    <h2 className="book-title"> {props.bookDeatails.title} </h2>
                    <h2 className="book-author"> {props.bookDeatails.author} </h2>
                    <h2 className="book-description"> {props.bookDeatails.description} </h2>
                    <h2 className="book-page"> {props.bookDeatails.page} </h2>
                    <h2 className="book-publishDate"> {props.bookDeatails.publishDate} </h2>
                    <Link
                        to={`/book/${props.bookDeatails.id}`} className="text-blue-500 underline">View Details </Link>
                </div>
            </div >
           
        </div>
    )
}
export default Book;

