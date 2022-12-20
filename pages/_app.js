import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.scss';
import { useEffect } from 'react';


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
