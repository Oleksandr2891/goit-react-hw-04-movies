import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { LoaderPosition } from "./LoaderStyled";


const LoaderSpiner = () => {
    return (
        <LoaderPosition>
            <Loader type="BallTriangle" color="#1900ff" height={300} width={300} timeout={6000} />
        </LoaderPosition>
    );
}

export default LoaderSpiner;