import { useState, useEffect } from "react";
import { getDeteilsMoviesReviews } from "../../../services/Api"
import Reviews from "./Reviews/Reviews";

const MovieDetailsReviews = ({ movieId }) => {
    const [reviews, setReviews] = useState();

    const getMoviesReviews = async (query) => {

        try {
            await getDeteilsMoviesReviews(query).then(res => {
                setReviews(res);
            })
        } catch (error) {
            alert(error);
        } finally {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
            });
        }

    }


    useEffect(() => {
        getMoviesReviews(movieId)
    }, [movieId])

    return (
        <>
            <h4>Reviews</h4>
            <ul>
                {reviews ? reviews?.map(({ author, content }) => <Reviews author={author} content={content} key={author} />) : <h4>Information not found</h4>}
            </ul>
        </>
    );
}

export default MovieDetailsReviews;