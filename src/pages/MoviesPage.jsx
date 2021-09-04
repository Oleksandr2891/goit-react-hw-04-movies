import { useState, useEffect, lazy, Suspense } from "react";
import { useHistory } from "react-router-dom";
import { SearchForm, SearchList } from "../componenets/MoviesPage/MoviePageStyled";
import { getSearchMovies } from '../services/Api'
import { notifySuccess, notifyError, notifyInfo } from "../notify/notify";
import LoaderSpiner from "../loader/Loader";

const SearchItemMovie = lazy(() => import("../componenets/MoviesPage/SearchItemMovie/SearchItemMovie"
/* webpackChunkName: "search-item-movie"*/));


export default function Searchbar() {
    const history = useHistory();
    const search = history.location.search;
    const [movieNameSearch, setMovieNameSearch] = useState('');
    const [moviesData, setMoviesData] = useState('');

    const handleMovieNameChange = event => {
        setMovieNameSearch(event.currentTarget.value.toLowerCase())
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (movieNameSearch.trim() === '') {
            notifyInfo("Enter querry");
            return;
        }
        getMoviesSearchForPage(movieNameSearch);
        history.push({ search: movieNameSearch })

    }

    const getMoviesSearchForPage = async (query) => {

        try {
            await getSearchMovies(query).then(res => {
                if (res.length === 0) {
                    notifyInfo("Nothing found by your request")
                } else {
                    notifySuccess("Search comleted successfully!!!");
                    setMoviesData(res);
                }
            })
        } catch (error) {
            notifyError(error);
        }
    }


    useEffect(() => {
        if (search) getReturnQuery(search.substr(1));
        // eslint-disable-next-line
    }, [])

    const getReturnQuery = (query = null) => {
        getMoviesSearchForPage(query)
        history.push(history.location)
    };


    return (
        <div>
            <SearchForm onSubmit={handleSubmit}>
                <button type="submit" className="SearchForm-button btn--primary btn--inside uppercase">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    name="imageNameSearch"
                    onChange={handleMovieNameChange}
                />
            </SearchForm>
            {moviesData &&
                <>
                    <Suspense fallback={<LoaderSpiner />}>
                        <SearchList>
                            {moviesData && moviesData.map(item => <SearchItemMovie key={item.id} id={item.id} title={item.title} query={movieNameSearch} />)}
                        </SearchList>
                    </Suspense>
                </>}
        </div>
    );
}
