import { useState, useEffect } from "react";
import { getDeteilsMoviesCast } from "../../../services/Api"
import Cast from "./Cast/Cast";
import { CastWrapper } from "./MovieDetailsCastStyled";

const MovieDetailsCast = ({ movieId }) => {
    const [cast, setCast] = useState();

    const getMoviesCast = async (query) => {

        try {
            await getDeteilsMoviesCast(query).then(res => {
                setCast(res);
            })
        } catch (error) {
            alert(error);
        } finally {
            window.scrollTo({
                top: 700,
                behavior: "smooth",
            });
        }
    }


    useEffect(() => {
        getMoviesCast(movieId)
    }, [movieId])


    return (
        <>
            <h4 className="cast-details">Cast</h4>
            <CastWrapper>
                {cast?.map(({ profile_path, name, character }) => <Cast path={profile_path} name={name} character={character} key={name} />)}
            </CastWrapper>
        </>
    );
}

export default MovieDetailsCast;