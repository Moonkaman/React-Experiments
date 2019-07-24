import * as actionTypes from './ActionTypes';

const baseURL = 'https://swapi.co/api'

export const fetch_movies = () => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_MOVIES})
    fetch(baseURL + '/films')
    .then(res => res.json())
    .then(data => {
      dispatch({type: actionTypes.FETCHING_MOVIES_SUCCESS, payload: data.results})
    })
  }
}