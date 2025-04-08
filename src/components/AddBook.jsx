import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/booksSlice"
import { useNavigate } from "react-router-dom";
import "./style.css"


function AddBook() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFromData] = useState({
        title: "",
        author: "",
        publishDate: "",
        category: "",
        page: "",
        rating: "",
        coverImageURL: "",
        description: "",
    });

    const handleChange = (e) => {
        setFromData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSumbit = (e) => {
        e.preventDefault();

        // Validation (basic)
        for (let key in formData) {
            if (!formData[key]) {
                alert(`${key} is required`);
                return;
            }
        }
        // Add book with new uniqe ID
        const newBook = {
            ...formData,
            id: Date.now().toString(), //Generate uniqe ID base on Date
        };
        dispatch(addBook(newBook));
        navigate("/BrowseBook")
    };


    return (
        <div className="p-4 max-w-xl mx-auto mainDiv">
            <h2 className="text-2xl font-bold headingForAddBok ">Add New Book</h2>
            <form onSubmit={handleSumbit} className="space-y-4 formForAddBook">
                {["title", "author", "description", "page", "publishDate", "rating", "coverImageURL", "category"].map((field) => (
                    <input style={{ marginBottom: "10px" }}
                        key={field}
                        type="text"
                        name={field}
                        placeholder={field}
                        value={formData[field]}
                        onChange={handleChange} 
                        className="w-full p-10 border-2 rounded hover:border-amber-600 addBookInput"
                    />
                ))}
                <div className="text-center">
                    <button type="sumbit" className="bg-blue-500 text-white  rounded hover:bg-amber-600  forAddBookButon">Add Book</button>
                </div>
            </form>
        </div>
    );
};


export default AddBook;