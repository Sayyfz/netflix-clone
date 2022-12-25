import * as actions from './movieActions.js';

const initialState = {
    loading: false,
    movies: [],
    error: '',
}

export const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.FETCH_NETFLIX_ORIGINALS:
            return {
                ...state,
                loading: true,
            }
        case actions.FETCH_TOP_RATED:
            return {
                ...state,
                loading: true,
            }
        case actions.FETCH_TRENDING:
            return {
                ...state,
                loading: true,
        }
        case actions.FETCH_ACTION:
            return {
                ...state,
                loading: true,
        }
        case actions.FETCH_ROMANCE:
            return {
                ...state,
                loading: true,
        }
        case actions.FETCH_HORROR:
            return {
                ...state,
                loading: true,
        }
        case actions.FETCH_COMEDY:
            return {
                ...state,
                loading: true,
        }
        case actions.FETCH_DOCUMENTARIES:
            return {
                ...state,
                loading: true,
        }
        case actions.FETCH_NETFLIX_ORIGINALS_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                error: '',
            }
        case actions.FETCH_TOP_RATED_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                error: '',
        }
        case actions.FETCH_TRENDING_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                error: '',
        }
        case actions.FETCH_ACTION_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                error: '',
        }
        case actions.FETCH_ROMANCE_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                error: '',
        }
        case actions.FETCH_COMEDY_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                error: '',
        }
        case actions.FETCH_HORROR_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                error: '',
        }
        case actions.FETCH_DOCUMENTARIES_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                error: '',
        }
        case actions.FETCH_NETFLIX_ORIGINALS_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload,
        }
        case actions.FETCH_TOP_RATED_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload,
        }
        case actions.FETCH_TRENDING_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload,
        }
        case actions.FETCH_ACTION_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload,
        }
        case actions.FETCH_ROMANCE_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload,
        }
        case actions.FETCH_COMEDY_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload,
        }
        case actions.FETCH_HORROR_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload,
        }
        case actions.FETCH_DOCUMENTARIES_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload,
        }
            
        
        default: return state;
    }
}