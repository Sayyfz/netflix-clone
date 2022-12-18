import styles from '../styles/Header.module.scss';
import { SearchIcon, BellIcon  } from '@heroicons/react/solid';

const Header = () => {
    return (  

        <nav className={`navbar navbar-expand-md navbar-light bg-light ${styles.navbar}`}>
        <div className={`  container-fluid ${styles.navbarContainer} mx-md-5`}>
            <a className={`navbar-brand ${styles.navbarBrand}`} href="#">
                <img src="https://rb.gy/ulxxee" />
            </a>
            <button className={`navbar-toggler clr-primary ${styles.navbarToggler}`} type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                Browse
            </button>
            {/* <div className={`${styles.navIcons}`}>
                <SearchIcon className={`w6`}/>
                <BellIcon className={`w6`} />
            </div> */}
            <div className="collapse navbar-collapse ms-md-5" id="navbarNavAltMarkup">
                <div className={`navbar-nav ${styles.navbarNav} align-items-center`}>
                    <a className="nav-link clr-primary" aria-current="page" href="#">Home</a>
                    <a className="nav-link clr-primary" href="#">TV Shows</a>
                    <a className="nav-link clr-primary" href="#">Movies</a>
                    <a className="nav-link clr-primary" href="#">New & Popular</a>
                    <a className="nav-link clr-primary" href="#">My List</a>
                </div>
            </div>

        </div>
        </nav>
    );
}
 
export default Header;