import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trailer from "./Pages/Trailer";
import Home from "./Pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/trailer" element={<Trailer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
