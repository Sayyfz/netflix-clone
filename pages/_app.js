import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';

import { useEffect, createContext } from 'react';
// import { Provider } from 'react-redux';
// import store from '../redux/store.js';


function MyApp({ Component, pageProps }) {



  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  )
}

export default MyApp
