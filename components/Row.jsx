import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import styles from '../styles/Row.module.scss';
import Thumbnail from "./Thumbnail.jsx";
import { useRef, useState } from "react";


const Row = ({ title, movies }) => {

    const rowRef = useRef(null);
    const [isMaxLeft, setIsMaxLeft ] = useState(false);
    const [isMaxRight, setIsMaxRight] = useState(false);

    const handleClick = (direction) => {
        if(rowRef.current) {
            const {scrollLeft, clientWidth, scrollWidth} = rowRef.current;

            const scrollTo = direction === "left" 
            ? scrollLeft - clientWidth
            : scrollLeft + clientWidth;
            
            rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"});
            
            setIsMaxRight(scrollWidth - (scrollTo + clientWidth) <= 0 ? true : false);
            setIsMaxLeft(scrollTo <= 0 ? true : false);
        }
    }


    return (  
        <div className={`${styles.row}  mcontainer my-4`}>
            <h2 className={`${styles.rowTitle} mfs-7`}> {title} </h2>
            <div className={`${styles.slider} position-relative w-100`}>
                <ChevronLeftIcon onClick={() => {handleClick("left")}}  className={`icon position-absolute my-auto ${isMaxLeft && 'd-none'}`}/>
                <ul ref={rowRef} className={`${styles.thumbnails} d-flex align-items-center h-100`}>
                    {
                        movies.map(movie =>  <Thumbnail movie={movie} key={movie.id}/> )
                    }
                </ul>
                <ChevronRightIcon onClick={() => {handleClick("right")}} className={`icon position-absolute my-auto ${isMaxRight && 'd-none'}`} />
            </div>
        </div>
    );
}
 
export default Row;