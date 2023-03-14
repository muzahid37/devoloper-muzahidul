import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Sheared/Footer";
import Navber from "./Components/Sheared/Navber";
import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Pages/Blog/Blog";
import AboutUs from "./Components/Pages/AboutUsDetails/AboutUs";

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/blog" element={<Blog></Blog>}></Route>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
