import { getDeteilsMovies } from '../services/Api';
import { useState, useEffect } from "react";
import { Route, useParams, Switch } from "react-router-dom";
import MovieDetailsCast from '../componenets/MovieDetailsPage/MovieDetailsCast/MovieDetailsCast';
import MovieDetailsReviews from '../componenets/MovieDetailsPage/MovieDetailsReviews/MovieDetailsReviews';
import ButtonGoBack from '../componenets/ButtonGoBack/ButtonGoBack';
import MovieCard from '../componenets/MovieDetailsPage/MovieCard/MovieCard';
import { PageCard } from '../componenets/MovieDetailsPage/MovieDetailPageStyled';

const MoviesPage = () => {


    const { movieId } = useParams();
    const [movieDataItem, setMovieDataItem] = useState([]);


    const getMoviesItemForPage = async (query) => {

        try {
            await getDeteilsMovies(query).then(res => {
                setMovieDataItem(res);
            })
        } catch (error) {
            alert(error);
        }
    }


    useEffect(() => {
        getMoviesItemForPage(movieId)
    }, [movieId])

    return (
        <PageCard>
            <ButtonGoBack />

            <MovieCard data={movieDataItem} />

            <Switch>
                <Route path='/movies/:movieId/cast'>
                    <MovieDetailsCast movieId={movieId} key={movieId} />
                </Route>
                <Route path='/movies/:movieId/reviews' key={movieId}>
                    <MovieDetailsReviews movieId={movieId} />
                </Route>
            </Switch>
        </PageCard>

    );
}

export default MoviesPage;