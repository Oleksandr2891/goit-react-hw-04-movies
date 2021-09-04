
import { useState, useEffect, lazy, Suspense } from "react";
import { getTrendingMovies } from '../../src/services/Api'
import { TrendList } from "../componenets/HomePage/HomePageStyled";
import { notifyError } from "../notify/notify";
import LoaderSpiner from "../loader/Loader";

const TrendingItemMovie = lazy(() => import("../componenets/HomePage/TrendingItemMovie/TrendingItemMovie"
/* webpackChunkName: "trending-item-movie"*/));


const HomePages = () => {

    const [movieData, setMovieData] = useState([]);


    const getMoviesForPage = async () => {

        try {
            await getTrendingMovies().then(res => {
                setMovieData(res);
            })
        } catch (error) {
            notifyError(error);
        }
    }

    useEffect(() => {
        getMoviesForPage()
    }, [])

    return (
        <>
            <Suspense fallback={<LoaderSpiner />}>
                <TrendList>
                    {movieData && movieData.map(({ id, title }) => (<TrendingItemMovie key={id} id={id} title={title} />))}
                </TrendList>
            </Suspense>
        </>
    );
}

export default HomePages;
