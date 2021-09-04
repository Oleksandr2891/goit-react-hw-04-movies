import { configUrl } from '../../../services/Api';
import { NavLink, useRouteMatch } from "react-router-dom";
import { MovieWrapper } from './MovieCardStyled';

const MovieCard = ({ data }) => {
    const { url } = useRouteMatch();
    const { poster_path, title, vote_average, overview, genres } = data
    return (
        <MovieWrapper>
            <div className="movie-poster">
                <img src={poster_path && `${configUrl.imgUrl}${poster_path}`} alt={title} className="movie-img" />
            </div>
            <div className="movie-about">
                <h3>{title}</h3>
                <p>User score: <span>{vote_average}</span></p>
                <h4>Overview</h4>
                <p>{overview}</p>
                <h4>Genres</h4>
                <ul>
                    {genres?.map(genre => <li key={genre.id}>{genre.name}</li>)}
                </ul>
                <h5 className="details">Additional information</h5>
                <ul className="list-link-details">
                    <li><NavLink to={`${url}/cast`} className="link-details" activeClassName="ink-details__active">Cast</NavLink></li>
                    <li><NavLink to={`${url}/reviews`} className="link-details" activeClassName="ink-details__active">Reviews</NavLink></li>
                </ul>
            </div>
        </MovieWrapper>
    );
}

export default MovieCard;