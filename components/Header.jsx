import styles from '../styles/Header.module.scss';
import { SearchIcon, BellIcon  } from '@heroicons/react/solid';
import { useEffect, useRef, useState } from 'react';

const Header = () => {

    const navLinks = [useRef(), useRef(), useRef(), useRef(), useRef()];
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinkOnClick = (linkNode) => {
        // make this one active and every other link inactive
        navLinks.map(link => {
            if (link.current != linkNode)
                link.current.classList.remove("active");
            else {
                link.current.classList.add("active");
            }
        });
        
    };

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
    
            <nav className={`py-md-2 mcontainer navbar navbar-expand-md navbar-light w-100 ${styles.navbar}`}>
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
                    <div className={`navbar-nav navLinks ${styles.navbarNav} align-items-center`}>
                        <a onClick={() => navLinkOnClick(navLinks[0].current)} ref={navLinks[0]} className={`nav-link active`} aria-current="page" href="#">Home</a>
                        <a onClick={() => navLinkOnClick(navLinks[1].current)} ref={navLinks[1]} className="nav-link" href="#">TV Shows</a>
                        <a onClick={() => navLinkOnClick(navLinks[2].current)} ref={navLinks[2]} className="nav-link" href="#">Movies</a>
                        <a onClick={() => navLinkOnClick(navLinks[3].current)} ref={navLinks[3]} className="nav-link" href="#">New & Popular</a>
                        <a onClick={() => navLinkOnClick(navLinks[4].current)} ref={navLinks[4]} className="nav-link" href="#">My List</a>
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