import * as actionTypes from './ActionTypes';

const baseURL = 'https://swapi.co/api'
let regx = /[^0-9]/g;

export const fetch_movies = () => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_MOVIES})
    fetch(baseURL + '/films')
    .then(res => res.json())
    .then(data => {
      dispatch({type: actionTypes.FETCHING_MOVIES_SUCCESS, payload: data.results})
    })
    .catch(err => dispatch({type: actionTypes.FETCHING_MOVIES_FAILURE, payload: 'Could not get movies at this time'}))
  }
}

export const fetch_movie = id => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_MOVIE});
    fetch(`${baseURL}/films/${id}/`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      dispatch({type: actionTypes.FETCHING_MOVIE_SUCCESS, payload: data})
    })
    .catch(err => dispatch({type: actionTypes.FETCHING_MOVIE_FAILURE, payload: 'Could not get movie at this time'}))
  }
}

export const fetch_movie_characters = urls => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_MOVIE_CHARACTERS});
    const characters = []
    urls.forEach(url => {
      characters.push(fetch(url).then(res => res.json()).then(data => data))
    })
    Promise.all(characters)
    .then(data => dispatch({type: actionTypes.FETCHING_MOVIE_CHARACTERS_SUCCESS, payload: data}))
  }
}

// Character Action Creators

export const fetch_character = id => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_CHARACTER});
    fetch(`${baseURL}/people/${id}`)
    .then(res => res.json())
    .then(data => dispatch({type: actionTypes.FETCHING_CHARACTER_SUCCESS, payload: data}))
  }
}