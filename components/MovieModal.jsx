import styles from '../styles/MovieModal.module.scss';
import { MContext } from '../pages';
import { useContext, useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieGenre from './MovieGenre.jsx';

const MovieModal = ({ modalMovie }) => {
    const genres = useRef(useContext(MContext).movies.genres);
    const [movieGenres, setMovieGenres] = useState([]);

    const getGenresByIds = (idsArray) => {
        return genres.current ?
        genres.current.filter(genre => idsArray.includes(genre.id)).map(genre => genre) : []
    };

    useEffect(() => {
        if(Object.keys(modalMovie).length <= 0)
            return;

        const evaluatedGenres = getGenresByIds(modalMovie.genre_ids);
        setMovieGenres(evaluatedGenres);
        
    }, [modalMovie])

    return (  
        <>
            {
                modalMovie && 
                <div className={`${styles.movieModal} m-modal modal fade`} id={`movieModal`} tabIndex="-1" aria-labelledby={`movieModalLabel`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content p-2">
                    <div className="modal-header d-block w-100">
                        <div className="d-flex h-100">
                            <h5 className="modal-title d-inline text-up" id={`movieModalLabel`}>{ modalMovie.title || modalMovie.name || modalMovie.original_name}</h5>
                            <button type="button" className="btn-close my-auto ms-auto align-items-center h-100" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="genres d-flex mt-3">
                            {
                                movieGenres.map(genre => <MovieGenre key={genre.id} genre={genre.name}/>)
                            }
                        </div>
                    </div>
                    <div className="modal-body">
                        {modalMovie.overview}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
            }


        </>
    );
}
 
export default MovieModal;