import Image from 'next/image';

const Thumbnail = ({ movie }) => {

    const posterPath = `https://image.tmdb.org/t/p/w500${movie?.backdrop_path || movie?.poster_path}`
    return (  
        <li className={`position-relative`}>
            <Image 
                src={posterPath}
                className="rounded"
                fill
                sizes='(max-width:768px) 180px'
                alt='Movie Thumbnail Image'
            />
        </li>
    );
}
 
export default Thumbnail;