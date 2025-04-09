import Moviecard from "../components/Moviecard"
import "../css/Home.css"
import { useState } from "react";
function Home() {
    const [searchquery, setSearchquery] = useState("");
    const movies = [
        { id: 1, title: "stree", date: "june" },
        { id: 2, title: "stree2", date: "july" },
        { id: 3, title: "stree3", date: "august" }

    ]
    function handlesearch(e) {
        e.preventDefault();
        alert(searchquery)
        setSearchquery("")
    }

    return (
        <>
            <div className="home">
                <form onSubmit={handlesearch}>
                    <input type="text"
                        placeholder="search movies ..."
                        className="search-input"
                        value={searchquery}
                        onChange={(e) => setSearchquery(e.target.value)}
                    />
                    <button type="submit" className="search-button">Search</button>

                </form>
                <div className="movies-grid">
                    {movies.map((movie) =>
                        <Moviecard movie={movie} key={movie.id} />

                    )}

                </div>
            </div>

        </>
    )
}
export default Home;