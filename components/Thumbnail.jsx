import Image from 'next/image';
import { useContext } from 'react';
import { MContext } from '../pages';

const Thumbnail = ({ movie }) => {
    const context = useContext(MContext);
    
    const posterPath = `https://image.tmdb.org/t/p/w500${movie?.backdrop_path || movie?.poster_path}`

    return (  
        <li className={`position-relative`}>
            <Image 
                src={posterPath}
                className="rounded z-10 position-relative"
                fill
                sizes='(max-width:768px) 180px'
                alt='Movie Thumbnail Image'
            />

            <button onClick={() => {context.setModalData(movie)}} type="button" className={`position-absolute m-modal-btn w-100 h-100`} data-bs-toggle="modal" data-bs-target={`#movieModal`}>
            </button>

        </li>
    );
}
 
export default Thumbnail;