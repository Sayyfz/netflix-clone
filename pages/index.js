import { useEffect, useState } from 'react';
import requests from '../utils/requests'
import Banner from '../components/Banner.jsx';
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Home.module.scss'
import Row from '../components/Row';
import { createContext } from 'react';

export const MContext = createContext([]);

export default function Home(props) {

  const [movies, setMovies] = useState(props);

  return (
    <MContext.Provider value={movies}>
      <div className=''>
        <Head>
          <title>Home - Netflix</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={` ${styles.homeWrapper}`}>
          <Banner/>

          <section className={`${styles.rows}`}>
            <Row title="Trending Now" movies={movies.trendingNow}/>
            <Row title="Top Rated" movies={movies.topRated}/>
            <Row title="Action Thrillers" movies={movies.actionMovies}/>

            {/* {list.length > 0 && <Row title="My List" movies={list}/>} */}

            <Row title="Comedies" movies={movies.comedyMovies}/>
            <Row title="Scary Movies" movies={movies.horrorMovies}/>
            <Row title="Romance Movies" movies={movies.romanceMovies}/>
            <Row title="Documentaries" movies={movies.documentaries}/>
          </section>
        </main>
      </div>
    </MContext.Provider>
  )
};

export const getServerSideProps = async () => {
  
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    axios.get(requests.fetchNetflixOriginals, { 
      headers: { "Accept-Encoding": "gzip,deflate,compress" } 
  }),
    axios.get(requests.fetchTrending, { 
      headers: { "Accept-Encoding": "gzip,deflate,compress" } 
  }),
    axios.get(requests.fetchTopRated, { 
      headers: { "Accept-Encoding": "gzip,deflate,compress" } 
  }),
    axios.get(requests.fetchActionMovies, { 
      headers: { "Accept-Encoding": "gzip,deflate,compress" } 
  }),
    axios.get(requests.fetchComedyMovies, { 
      headers: { "Accept-Encoding": "gzip,deflate,compress" } 
  }),
    axios.get(requests.fetchHorrorMovies, { 
      headers: { "Accept-Encoding": "gzip,deflate,compress" } 
  }),
    axios.get(requests.fetchRomanceMovies, { 
      headers: { "Accept-Encoding": "gzip,deflate,compress" } 
  }),
    axios.get(requests.fetchDocumentaries, { 
      headers: { "Accept-Encoding": "gzip,deflate,compress" } 
  }),
  ]);

 
  return {
    props: {
      netflixOriginals: netflixOriginals.data.results,
      trendingNow: trendingNow.data.results,
      topRated: topRated.data.results,
      actionMovies: actionMovies.data.results,
      comedyMovies: comedyMovies.data.results,
      horrorMovies: horrorMovies.data.results,
      romanceMovies: romanceMovies.data.results,
      documentaries: documentaries.data.results,
    }
  }

};
