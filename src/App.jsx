import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/store";


function App() {

  return (
    < Provider store={appStore}>
      <Header />
      <Outlet />
      <h2 className="buttonForGitLink text-center"><a href="https://github.com/iabhishek-singh/Online-Library-System">GitHub</a></h2>
    </ Provider>
  )
}

export default App
