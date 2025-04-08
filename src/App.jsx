// import LandingPage from "./components/LandingPage"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/store";
// import BrowseBooks from "./components/BrowseBooks";

function App() {

  return (
    < Provider store={appStore}>
      <Header />
      <Outlet />
      <h2 className="buttonForGitLink text-center"><a href="">GitHub</a></h2>
    </ Provider>
  )
}

export default App
