import * as actionTypes from '../actions/ActionTypes'

const initialState  = {
  is_fetching_movies: false,
  fetching_movies_success: false,
  fetching_movies_error: null,
  movies: []
}

export default(state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCHING_MOVIES:
      return {...state, is_fetching_movies: true}

    case actionTypes.FETCHING_MOVIES_SUCCESS:
      console.log(action.payload);
      return {...state, movies: action.payload, is_fetching_movies: false}

    case actionTypes.FETCHING_MOVIES_FAILURE:
      console.log(action.payload);
      return {...state, fetching_movies_error: action.payload, is_fetching_movies: false}

    default:
      return state;
  }
}