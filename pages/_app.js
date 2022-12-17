import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
