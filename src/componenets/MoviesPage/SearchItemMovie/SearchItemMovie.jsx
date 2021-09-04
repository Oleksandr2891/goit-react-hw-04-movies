import { Link, useHistory } from "react-router-dom";
import { SearchMovieItem } from "./SearchItemMovieStyled";

const SearchItemMovie = ({ id, title, query }) => {
    const history = useHistory();
    return (
        <SearchMovieItem>
            <Link to={{ pathname: `/movies/${id}`, state: { from: history.location, query: { query } } }} className="movielink-item">{title}</Link>
        </SearchMovieItem>
    );
}

export default SearchItemMovie;
