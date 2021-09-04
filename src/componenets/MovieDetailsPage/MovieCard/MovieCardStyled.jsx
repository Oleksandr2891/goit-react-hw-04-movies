import styled from "styled-components";

export const MovieWrapper = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-around;
    align-items: center;

    .movie-poster{
        border: 2px solid #030d2b;
        border-radius: 10px;
        overflow: hidden;
     }

    .movie-img{
         object-fit: cover;
    }

    .movie-about {
        width: 400px;
        padding: 20px;
    }

    .details {
        text-align: center;
    }

    .list-link-details{
        display: flex;
        padding: 5px;
        justify-content: space-around;
    }

    .link-details {
        font-size: 18px;
        color: white;
        text-decoration: none;
        cursor: pointer;
        &:hover{
            color: red;
        }
    }
`;