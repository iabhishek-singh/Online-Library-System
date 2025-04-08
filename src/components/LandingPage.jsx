import "./style.css";
import { Books } from "../utils/mockData";
import BookList from "./BookList";

function LandingPage() {
    return (
        <div>
            <h1 className="headingPopular text-center text-4xl text-orange-600 font-bold underline">
                Popular books
            </h1>
            <BookList booksData={Books} />
        </div>
    );
}
export default LandingPage;
