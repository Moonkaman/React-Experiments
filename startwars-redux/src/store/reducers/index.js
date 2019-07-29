import { combineReducers } from 'redux'

import MovieReducers from './MovieReducers';
import CharacterReducer from './CharacterReducer';
import PlanetReducer from './PlanetReducer';

const rootReducer = combineReducers({
  movie_reducers: MovieReducers,
  character_reducer: CharacterReducer,
  planet_reducer: PlanetReducer
})

export default rootReducer;