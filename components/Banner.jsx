import { useEffect, useState } from "react";
import { StarIcon, PlayIcon, InformationCircleIcon } from '@heroicons/react/solid';
import styles from '../styles/Banner.module.scss'

const Banner = ({ netflixOriginals }) => {
    const [bannerMovie, setBannerMovie] = useState(null);

    const randomMovieIndex = Math.floor(Math.random() * netflixOriginals.length);
    useEffect(() => {
        setBannerMovie(netflixOriginals[randomMovieIndex]);
    }, [])

    useEffect(() => {
        console.log(bannerMovie);
    }, [bannerMovie])

    return (  
    <main className={`${styles.banner} position-relative`}>
        <img className={`${styles.bannerImg} position-absolute h-100 w-100`} 
            src={`https://via.placeholder.com/2000`} 
            alt="" 
        />
        <div className={`${styles.bannerItems} ${styles.container} mcontainer d-flex flex-column w-100`}>
            <div className={`${styles.bannerMovieInfo}`}>
                <StarIcon className={`${styles.bannerMovieRatingIcon} me-1`} />
                <span className={`${styles.bannerMovieRating}`}>
                    {bannerMovie?.vote_average}
                </span>
                <span className={`seperator mx-3`}></span>
                <span className={`${styles.bannerMovieDate}`}>
                    { new Date(bannerMovie?.release_date).getFullYear() }
                </span>
            </div>

            <h1 className={`${styles.bannerMovieTitle} mfs-6`}>{ bannerMovie?.title }</h1>
            <p className={`${styles.bannerMovieOverview} mfs-3`}>
                {bannerMovie?.overview}
            </p>

            <div className={`${styles.bannerBtns} d-flex `}>
                <button className={`mbtn mbtn-accent bg-accent align-items-center`}><span> <PlayIcon /> </span> Play </button>
                <button className={`mbtn bg-extra align-items-center`}><span><InformationCircleIcon /></span>More Info</button>
            </div>
        </div>

    </main>
    );
}
 
export default Banner;