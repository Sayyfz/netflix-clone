import { useEffect, useState } from "react";


const Banner = ({ netflixOriginals }) => {
    const [movie, setMovie] = useState(null);

    const randomMovieIndex = Math.floor(Math.random() * netflixOriginals.length);
    useEffect(() => {
        setMovie(netflixOriginals[randomMovieIndex]);
    }, [])

    useEffect(() => {
        console.log(movie);
    }, [movie])

    return (  
        <header>
            
        </header>
    );
}
 
export default Banner;