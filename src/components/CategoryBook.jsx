import {Link, useParams } from "react-router-dom";
import { Books } from "../utils/mockData";
import Book from "./Book";

function CategoryBook(){
    const {category} = useParams();

    const filteredBooks =Books.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
    );

    return(
        <div> 
            <h1 className="text-3xl text-center font-bold my-4"> {category} Books </h1>

            <div className="bookList text-center">
                {filteredBooks.map((book) => (
                

                    <Book key={book.id} bookDeatails={book}/>
                ))}
                
            </div>
        </div>
    )
}
export default CategoryBook;