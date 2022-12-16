import { useEffect, useState } from 'react';
import axios from 'axios'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  const fetchApi = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=e875efbf3b720a58b15b1ecd9738f915');
    console.log(res.data);
  }

  useEffect(() => {
    fetchApi();
  })

  return (
    <div className={styles.container}>
     
    </div>
  )
}
