import { configUrl } from "../../../../services/Api";
import { CastItem } from "./CastStyled";

const Cast = ({ path, name, character }) => {
    return (
        <CastItem>
            <img src={path && `${configUrl.imgUrl}${path}`} alt="" className="actor-img" />
            <h4>{name}</h4>
            <p>Character:<span>{character}</span></p>
        </CastItem>
    );
}

export default Cast;