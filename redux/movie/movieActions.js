import axios from "axios"
import requests from "../../utils/requests"


export const fetchNetflixOriginalsRequest = () => {
    return {
        type: FETCH_NETFLIX_ORIGINALS
    }
}

export const fetchNetflixOriginalsSuccess = (movies) => {
    return {
        type: FETCH_NETFLIX_ORIGINALS_SUCCESS,
        payload: movies,
    }
}

export const fetchNetflixOriginalsFailure = (error) => {
    return {
        type: FETCH_NETFLIX_ORIGINALS_FAILURE,
        payload: error,
    }
}



export const fetchNetflixOriginals = () => {
    return fetchCategory(
        requests.fetchNetflixOriginals,
        fetchNetflixOriginalsRequest,
        fetchNetflixOriginalsSuccess,
        fetchNetflixOriginalsFailure
    )
}

export const fetchTrendingRequest  = () => {
    return {
        type: FETCH_TRENDING
    }
}

export const fetchTrendingSuccess = (movies) => {
    return {
        type: FETCH_TRENDING_SUCCESS,
        payload: movies
    }
}

export const fetchTrendingFailure = (error) => {
    return {
        type: FETCH_TRENDING_FAILURE,
        payload: error
    }
}

export const fetchTrending = () => {
    return fetchCategory(
        requests.fetchTrending,
        fetchTrendingRequest,
        fetchTrendingSuccess,
        fetchTrendingFailure
    )
}

export const fetchTopRatedRequest  = () => {
    return {
        type: FETCH_TOP_RATED
    }
}

export const fetchTopRatedSuccess = (movies) => {
    return {
        type: FETCH_TOP_RATED_SUCCESS,
        payload: movies,
    }
}

export const fetchTopRatedFailure = (error) => {
    return {
        type: FETCH_TOP_RATED_FAILURE,
        payload: error,
    }
}

export const fetchTopRated = () => {
    return fetchCategory(
        requests.fetchTopRated,
        fetchTopRatedRequest,
        fetchTopRatedSuccess,
        fetchTopRatedFailure
    )
}

export const fetchActionMoviesRequest  = () => {
    return {
        type: FETCH_ACTION
    }
}

export const fetchActionMoviesSuccess = (movies) => {
    return {
        type: FETCH_ACTION_SUCCESS,
        payload: movies
    }
}

export const fetchActionMoviesFailure = (error) => {
    return {
        type: FETCH_ACTION_FAILURE,
        payload: error
    }
}

export const fetchActionMovies = () => {
    return fetchCategory(
        requests.fetchActionMovies,
        fetchActionMoviesRequest,
        fetchActionMoviesSuccess,
        fetchActionMoviesFailure
    )
}

export const fetchComedyMoviesRequest  = () => {
    return {
        type: FETCH_COMEDY
    }
}

export const fetchComedyMoviesSuccess = (movies) => {
    return {
        type: FETCH_COMEDY_SUCCESS,
        payload: movies,
    }
}

export const fetchComedyMoviesFailure = (error) => {
    return {
        type: FETCH_COMEDY_FAILURE,
        payload: error,
    }
}

export const fetchComedyMovies = () => {
    return fetchCategory(
        requests.fetchComedyMovies,
        fetchComedyMoviesRequest,
        fetchComedyMoviesSuccess,
        fetchComedyMoviesFailure
    )
}

export const fetchHorrorMoviesRequest  = () => {
    return {
        type: FETCH_HORROR
    }
}

export const fetchHorrorMoviesSuccess = (movies) => {
    return {
        type: FETCH_HORROR_SUCCESS,
        payload: movies
    }
}

export const fetchHorrorMoviesFailure = (error) => {
    return {
        type: FETCH_HORROR_FAILURE,
        payload: error
    }
}

export const fetchHorrorMovies = () => {
    return fetchCategory(
        requests.fetchHorrorMovies,
        fetchHorrorMoviesRequest,
        fetchHorrorMoviesSuccess,
        fetchHorrorMoviesFailure
    )
}

export const fetchRomanceMoviesRequest  = () => {
    return {
        type: FETCH_ROMANCE
    }
}

export const fetchRomanceMoviesSuccess = (movies) => {
    return {
        type: FETCH_ROMANCE_SUCCESS,
        payload: movies
    }
}

export const fetchRomanceMoviesFailure = (error) => {
    return {
        type: FETCH_ROMANCE_FAILURE,
        payload: error
    }
}

export const fetchRomanceMovies = () => {
    return fetchCategory(
        requests.fetchRomanceMovies,
        fetchRomanceMoviesRequest,
        fetchRomanceMoviesSuccess,
        fetchRomanceMoviesFailure
    )
}

export const fetchDocumentariesRequest  = () => {
    return {
        type: FETCH_DOCUMENTARIES
    }
}

export const fetchDocumentariesSuccess = (movies) => {
    return {
        type: FETCH_DOCUMENTARIES_SUCCESS,
        payload: movies
    }
}

export const fetchDocumentariesFailure = (error) => {
    return {
        type: FETCH_DOCUMENTARIES_FAILURE,
        payload: error
    }
}

export const fetchDocumentaries = () => {
    return fetchCategory(
        requests.fetchDocumentaries,
        fetchDocumentariesRequest,
        fetchDocumentariesSuccess,
        fetchDocumentariesFailure
    )
}



const fetchCategory = (url, request, success, failure) => {
    return (dispatch) => {
        dispatch(request())

        axios.get(url, { 
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
        }).then(res => {
            dispatch(success(res.data.results))
        }).catch(err => {
            dispatch(failure(err))
        });
    }
}