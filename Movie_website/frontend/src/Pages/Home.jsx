import { getPopularMovies, searchMovies } from "../../services/api";
import Moviecard from "../components/Moviecard"
import "../css/Home.css"
import { useEffect, useState } from "react";
// import{searchMovies,getPopularMovies} from "../services/api";

function Home() {
    const [searchquery, setSearchquery] = useState("");
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            catch (err) {
                console.log(err);
                setError("Failed to Load Movies ")

            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])



    const handlesearch = async (e) => {
        e.preventDefault();
        if (!searchquery.trim()) return
        if (loading) return
        setLoading(true)
        try {
            const searchResults = await searchMovies(searchquery)
            setMovies(searchResults)
            setError(null)
        }
        catch (err) {
            console.log(err);
            setError("failed to search Movies ...")

        }
        finally {
            setLoading(false)
        }

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
                {error ?
                    <div className="error-message">{error}</div> : null}

                {loading ? (<div className="loading">Loading...</div>) :
                    <div className="movies-grid">
                        {movies.map((movie) =>
                            <Moviecard movie={movie} key={movie.id} />

                        )}
                    </div>
                }

            </div>

        </>
    )
}
export default Home;