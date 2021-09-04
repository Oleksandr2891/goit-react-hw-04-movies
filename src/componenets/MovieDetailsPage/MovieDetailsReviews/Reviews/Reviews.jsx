const Reviews = ({ author, content }) => {
    return (
        <li>
            <h3>Author:<span>{author}</span></h3>
            <p>{content}</p>
        </li>
    );
}

export default Reviews;