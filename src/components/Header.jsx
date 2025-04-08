import "./style.css";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <nav className="navBar w-full">
                <h1 className="text-2xl">Online Library System</h1>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/BrowseBook">Browse Books</Link>
                    <Link to="/addbook">Add Book</Link>
                </li>
            </nav>
            <h1 className="welocomeMe text-center text-3xl font-bold text-gray-500 font-serif"> Welcome !!</h1>
            <div className="flex flex-wrap justify-center items-center h-80 ">
                <div className="w-full max-w-6xl h-44 bg-white flex justify-around items-center  border border-gray-300 rounded-lg shadow-lg gap-0.5">
                    <div className="box bg-blue-500 text-white rounded-md shadow-md"><Link to="/books/Fiction">Fiction</Link></div>
                    <div className="box bg-blue-500 text-white rounded-md shadow-md"><Link to="/books/Non-Fiction">Non-Fiction</Link></div>
                    <div className="box bg-blue-500 text-white rounded-md shadow-md"><Link to="/books/Romantic">Romantic</Link></div>
                    <div className="box bg-blue-500 text-white rounded-md shadow-md"><Link to="/books/Religious">Religious</Link> </div>
                </div>
            </div>
        </div>
    )
};
export default Header;