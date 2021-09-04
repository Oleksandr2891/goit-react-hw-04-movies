import styled from "styled-components";

export const SearchForm = styled.form`
    $background: #f5f6fa;
    $text: #9c9c9c;
    $input-bg-color: #fff;
    $input-text-color: #a3a3a3;
    $button-bg-color: #7f8ff4;
    $button-text-color: #fff;

    position: fixed;
    top: 20px;
    right: 25px;
    font-size:14px;

    .SearchForm-input {
    width: 260px;
	background: #fff;
	color: #a3a3a3;
	font: inherit;
	box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1);
	border: 0;
	outline: 0;
	padding: 14px 18px;
    }

    .SearchForm-button{
        position: relative;
        right: -268px;
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

export const SearchList = styled.form`
    padding: calc(8em + 1.5vw) 4em 0;
	font-size: calc(2em + .25vw);
	font-weight: 400;
	line-height: 2;
	margin-bottom: 1.5em;
	color: #fcfcfc important;
    list-style:none;
`;