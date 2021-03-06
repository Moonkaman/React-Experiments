import * as actionTypes from '../actions/ActionTypes'

const initialState  = {
  is_fetching_movies: false,
  fetching_movies_success: false,
  fetching_movies_error: null,
  is_fetching_movie: false,
  fetching_movie_success: false,
  fetching_movie_error: null,
  is_fetching_movie_characters: false,
  fetching_movie_characters_success: false,
  fetching_movie_characters_error: null,
  is_fetching_movie_planets: false,
  fetching_movie_planets_success: false,
  fetching_movie_planets_error: null,
  movies: [],
  movie: null,
  movie_characters: [],
  movie_planets: []
}

export default(state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCHING_MOVIES:
      return {...state, is_fetching_movies: true}

    case actionTypes.FETCHING_MOVIES_SUCCESS:
      return {...state, movies: action.payload, is_fetching_movies: false}

    case actionTypes.FETCHING_MOVIES_FAILURE:
      return {...state, fetching_movies_error: action.payload, is_fetching_movies: false}

    case actionTypes.FETCHING_MOVIE:
      return {...state, is_fetching_movie: true}

    case actionTypes.FETCHING_MOVIE_SUCCESS:
      return {...state, is_fetching_movie: false, movie: action.payload, fetching_movie_characters_success: true}

    case actionTypes.FETCHING_MOVIE_FAILURE:
      return {...state, is_fetching_movie: false, fetching_movie_error: action.payload}

    case actionTypes.FETCHING_MOVIE_CHARACTERS:
      return {...state, is_fetching_movie_characters: true}

    case actionTypes.FETCHING_MOVIE_CHARACTERS_SUCCESS:
      return {...state, is_fetching_movie_characters: false, fetching_movie_characters_success: true, movie_characters: action.payload}

    case actionTypes.FETCHING_MOVIE_PLANETS:
      return {
        ...state,
        is_fetching_movie_planets: true
      }

    case actionTypes.FETCHING_MOVIE_PLANETS_SUCCESS:
      return {
        ...state,
        is_fetching_movie_planets: false,
        movie_planets: action.payload
      }

    case actionTypes.FETCHING_MOVIE_PLANETS_FAILURE:
      return {
        ...state,
        is_fetching_movie_planets: false,
        fetching_movie_planets_error: action.payload
      }

    case actionTypes.RESET_MOVIE_ATTRIBUTES:
      return {
        ...state,
        movie_characters: [],
        movie_planets: []
      }

    default:
      return state;
  }
}