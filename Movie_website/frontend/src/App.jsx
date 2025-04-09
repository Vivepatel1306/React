import "./css/App.css";
import Favorites from "./Pages/Favourites";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
// import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  return (<>

      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
