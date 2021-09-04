import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { ButtonWrapper } from "./ButtonGoBackStyled";

const ButtonGoBack = () => {
    const history = useHistory();
    const [back, setBack] = useState()
    const backDate = history.location.state

    useEffect(() => {
        backDate && setBack(backDate)
    }, [backDate])

    const onHandleClick = () => {

        history.push(back?.from, [back.query]);
    }


    return (
        <ButtonWrapper>
            <button type="button" onClick={onHandleClick} className="GoBack-button">Go Back</button>
        </ButtonWrapper>
    );
}

export default ButtonGoBack;
