import styles from '../styles/Header.module.scss';
import { SearchIcon, BellIcon  } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0)
                setIsScrolled(true);
            else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (  
<header className={`${styles.header} ${isScrolled && styles.headerScrolled} position-fixed w-100 d-flex`}>
    
            <nav className={`  py-md-2 mcontainer navbar navbar-expand-md navbar-light w-100 ${styles.navbar}`}>
            <div className={`container-fluid ${styles.navbarContainer}`}>
                <a className={`navbar-brand ${styles.navbarBrand}`} href="#">
                    <img src="https://rb.gy/ulxxee" />
                </a>
                <button className={`navbar-toggler clr-primary ${styles.navbarToggler}`} type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    Browse
                </button>
                <div className={`${styles.navbarCollapse} collapse navbar-collapse ms-md-5`} id="navbarNavAltMarkup">
                    <div className={`navbar-nav ${styles.navbarNav} align-items-center`}>
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">TV Shows</a>
                        <a className="nav-link" href="#">Movies</a>
                        <a className="nav-link" href="#">New & Popular</a>
                        <a className="nav-link" href="#">My List</a>
                    </div>
                </div>
                <div className={`${styles.navIcons} position-absolute`}>
                    <SearchIcon className={`w6`}/>
                    <span>Kids</span>
                    <BellIcon className={`w6`} />
                </div>
    
            </div>
            </nav>
</header>
    );
}
 
export default Header;