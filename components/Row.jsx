import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import styles from '../styles/Row.module.scss';
import Thumbnail from "./Thumbnail.jsx";
import { useRef, useState } from "react";


// 7ot el thumbnails fe nos el arrows ystaaaaaaaaaaaaaaaaaaaaa
const Row = ({ title, movies }) => {

    const rowRef = useRef(null);
    const [isMoved, setIsMoved ] = useState(false);

    const handleClick = (direction) => {
        setIsMoved(true);
        if(rowRef.current) {
            const {scrollLeft, clientWidth} = rowRef.current;

            const scrollTo = direction === "left" 
            ? scrollLeft - clientWidth
            : scrollLeft + clientWidth

            rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
        }
    }

    return (  
        <div className={`${styles.row}  mcontainer my-4`}>
            <h2 className={`${styles.rowTitle} mfs-7`}> {title} </h2>
            <div className={`${styles.slider} position-relative w-100`}>
                <ChevronLeftIcon onClick={() => {handleClick("left")}}  className={`icon position-absolute my-auto ${!isMoved && 'd-none'}`}/>
                <ul ref={rowRef} className={`${styles.thumbnails} d-flex align-items-center h-100`}>
                    {
                        movies.map(movie =>  <Thumbnail movie={movie} key={movie.id}/> )
                    }
                </ul>
                <ChevronRightIcon onClick={() => {handleClick("right")}} className={`icon position-absolute my-auto`} />
            </div>
        </div>
    );
}
 
export default Row;