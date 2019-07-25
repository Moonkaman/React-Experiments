import { combineReducers } from 'redux'

import MovieReducers from './MovieReducers';
import CharacterReducer from './CharacterReducer';

const rootReducer = combineReducers({
  movie_reducers: MovieReducers,
  character_reducer: CharacterReducer
})

export default rootReducer;