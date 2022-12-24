import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { MContext } from '../constants/Context.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.scss';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const lol = 'seif'
  const lmao = 'ezz';
  return (
    <MContext.Provider value={{ lol, lmao }}>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </MContext.Provider>
  )
}

export default MyApp
