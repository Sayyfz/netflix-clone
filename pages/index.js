import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css'

export default function Home() {
  
  const [movies, setMovies] = useState([])

  const instance = axios.create({
    baseURL: '',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
    });

  sendRequest = (title) => {


    // const res = axios.get("https://movie-database-imdb-alternative.p.rapidapi.com/");
    
  }

  useEffect(() => {
    sendRequest('lord')
  })

  return (
    <div className={styles.container}>
      {
        movies.map(movie => <p>{movie.title}</p>)
      }
    </div>
  )
}
