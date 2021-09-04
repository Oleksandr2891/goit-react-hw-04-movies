import { Link, useLocation } from "react-router-dom";
import { MovieItem } from "./TrendingItemMovieStyled";

const TrendingItemMovie = ({ id, title }) => {
    const location = useLocation();
    return (
        <MovieItem>
            <Link to={{ pathname: `/movies/${id}`, state: { from: location } }} className="movielink-item" > {title}</Link>
        </MovieItem>
    );
}

export default TrendingItemMovie;