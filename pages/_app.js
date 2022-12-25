import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { MContext } from '../constants/Context.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import store from '../redux/store.js';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </Provider>
  )
}

export default MyApp
