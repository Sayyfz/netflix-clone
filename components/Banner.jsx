import { useEffect, useState } from "react";
import styles from '../styles/Banner.module.scss'

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
        <header className={styles.banner}>
            This is banner
        </header>
    );
}
 
export default Banner;