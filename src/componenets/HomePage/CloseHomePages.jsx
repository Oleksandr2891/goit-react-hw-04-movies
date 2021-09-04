
// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { getTrendingMovies } from '../../services/Api'


// const HomePages = () => {
//     const location = useLocation();
//     const [movieData, setMovieData] = useState([]);


//     const getMoviesForPage = async () => {

//         try {
//             await getTrendingMovies().then(res => {
//                 setMovieData(res);
//             })
//         } catch (error) {
//             alert(error);
//         }
//     }

//     useEffect(() => {
//         getMoviesForPage()
//     }, [])

//     return (
//         <>
//             <h2>My home page</h2>
//             <ul>
//                 {movieData && movieData.map(item => (
//                     <li key={item.id}>
//                         <Link to={{ pathname: `/movies/${item.id}`, state: { from: location, qwery: "dog" } }} > {item.title}</Link>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

// export default HomePages;