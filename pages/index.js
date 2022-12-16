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


    const req = axios.get("https://movie-database-imdb-alternative.p.rapidapi.com/");
    req.headers({
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      "x-rapidapi-key": "6aedc604ebmsh33ab3d38b68088dp1cb9d4jsna8b0115acb3e"
    });
    req.end(function (res) {
      if (res.error) throw new Error(res.error);
      console.log(res.body);
    });
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
