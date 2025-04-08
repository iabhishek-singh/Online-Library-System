import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from './components/LandingPage.jsx';
import { Error } from "./components/Error.jsx"
import BookDetails from './components/BookDetails.jsx'
import BrowseBook from './components/BrowseBooks.jsx';
import AddBook from "./components/AddBook.jsx";
import CategoryBook from './components/CategoryBook.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      }, 
      {
        path: "/browsebook",
        element: <BrowseBook />
      },
      
      {
        path: "/books/:category",
        element: <CategoryBook />
      },
      {
        path: "/book/:id",
        element: <BookDetails />
      },
      {
        path: "/addbook",
        element: <AddBook/>
      },
    ],
    errorElement: <Error />,
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)


/**
 * {
        path: "/fiction",
        element: <Fiction />
      }, {
        path: "/romantic",
        element: <Romantic />
      }, {
        path: "/religious",
        element: <Religious />
      },
 */