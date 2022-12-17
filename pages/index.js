import { useEffect, useState } from 'react';
import requests from '../utils/requests'
import Banner from '../components/Banner.jsx';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Home({ netflixOriginals }) {
  


  return (
    <div className={styles.container}>
      <Banner netflixOriginals={netflixOriginals} />
    </div>
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
  } ),
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
