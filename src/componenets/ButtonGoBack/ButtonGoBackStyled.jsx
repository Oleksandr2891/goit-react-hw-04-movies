import styled from "styled-components";

export const ButtonWrapper = styled.div`
 .GoBack-button{
        position: fixed;
        top: 20px;
        right: 20px;
        display: inline-block;
        background: #7f8ff4;
        padding: 12px 26px;
        color: #fff;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);
		border-radius: 2px;
        font: inherit;
        border: 0;
        outline: 0;
        /* transition: all 200ms ease-in; */
        cursor: pointer;

		&:hover {
			background: darken(#7f8ff4, 4%);
            box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, .2);
		}
    }

`;