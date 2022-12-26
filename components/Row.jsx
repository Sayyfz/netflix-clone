import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import styles from '../styles/Row.module.scss';
import Thumbnail from "./Thumbnail.jsx";


// 7ot el thumbnails fe nos el arrows ystaaaaaaaaaaaaaaaaaaaaa
const Row = ({ title, movies }) => {


    return (  
        <div className={`${styles.row} mcontainer my-4`}>
            <h2 className={`${styles.rowTitle} mfs-7`}> {title} </h2>
            <div className={`${styles.slider} position-relative w-100`}>
                <ChevronLeftIcon  className={`icon position-absolute my-auto`}/>
                <ul className={`${styles.thumbnails} d-flex align-items-center h-100`}>
                    {
                        movies.map(movie =>  <Thumbnail movie={movie} key={movie.id}/> )
                    }
                </ul>
                <ChevronRightIcon className={`icon position-absolute my-auto`} />
            </div>
        </div>
    );
}
 
export default Row;