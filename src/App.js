import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Books from "./components/Books/Books";
import Categories from "./components/Categories/Categories";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
