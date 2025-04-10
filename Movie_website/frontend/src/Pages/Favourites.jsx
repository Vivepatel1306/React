import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import Moviecard from "../components/Moviecard"
function Favorites() {
    const { favorites } = useMovieContext();
    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1rem',
                }}>
                    {favorites.map((movie) =>
                        <Moviecard movie={movie} key={movie.id} />

                    )}

                </div>

            </div>
        )

    }
    return (
        <div className="favorite-empty">
            <h2>No favorite is there</h2>
            <p>add some data here</p>
        </div>
    )
}
export default Favorites