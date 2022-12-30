import { useEffect, useState, useContext } from "react";
import styles from '../styles/Banner.module.scss'
import Image from 'next/image';
import { StarIcon, PlayIcon, InformationCircleIcon } from '@heroicons/react/solid';
import { baseUrl } from "../constants/movie";
import { MContext } from "../pages";

const Banner = () => {
    const [bannerMovie, setBannerMovie] = useState(null);
    const context = useContext(MContext);
    const { netflixOriginals } = context.movies;
    
    useEffect(() => {
        const randomMovieIndex = Math.floor(Math.random() * netflixOriginals?.length);
        setBannerMovie(netflixOriginals[randomMovieIndex]);
    }, [])

    return (  
    <div className={`${styles.banner} position-relative`}>
        <div className={`${styles.bannerImgContainer} position-absolute`}>
        {
            bannerMovie && 
            <Image
                className={`${styles.bannerImg} `}
                fill
                style={{objectFit: 'cover'}}
                src={`${baseUrl}${bannerMovie?.backdrop_path || bannerMovie?.poster_path }`}
                alt='Banner Image'
            />
        }
        </div>
        
        <div className={`${styles.bannerItems} ${styles.container} mcontainer d-flex flex-column w-100`}>
            <div className={`${styles.bannerMovieInfo}`}>
                <StarIcon className={`${styles.bannerMovieRatingIcon} me-1`} />
                <span className={`${styles.bannerMovieRating}`}>
                    {bannerMovie?.vote_average}
                </span>
                <span className={`seperator mx-3`}> </span>
                <span className={`${styles.bannerMovieDate}`}>
                    { bannerMovie? new Date(bannerMovie.release_date).getFullYear() : null }
                </span>
            </div>

            <h1 className={`${styles.bannerMovieTitle} mfs-6`}>{ bannerMovie?.title || bannerMovie?.name || bannerMovie?.original_name}</h1>
            <p className={`${styles.bannerMovieOverview} mfs-3`}>
                {bannerMovie?.overview}
            </p>

            <div className={`${styles.bannerBtns} d-flex `}>
                <button type="button" className={`mbtn mbtn-accent bg-accent align-items-center`}><span> <PlayIcon /> </span> Play </button>
                <button type="button" className={`mbtn bg-extra align-items-center`}><span><InformationCircleIcon /> </span>More Info</button>
            </div>
        </div>

    </div>
    );
}
 
export default Banner;