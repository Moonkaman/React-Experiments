import { combineReducers } from 'redux'

import MovieReducers from './MovieReducers';

const rootReducer = combineReducers({
  movie_reducers: MovieReducers
})

export default MovieReducers;