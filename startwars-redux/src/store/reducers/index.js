import { combineReducers } from 'redux'

import MovieReducers from './MovieReducers';

export default combineReducers({
  movie_reducers: MovieReducers
})