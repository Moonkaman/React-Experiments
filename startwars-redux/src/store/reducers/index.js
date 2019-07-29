import { combineReducers } from 'redux'

import MovieReducers from './MovieReducers';
import CharacterReducer from './CharacterReducer';
import PlanetReducer from './PlanetReducer';
import SpeciesReducer from './SpeciesReducer';

const rootReducer = combineReducers({
  movie_reducers: MovieReducers,
  character_reducer: CharacterReducer,
  planet_reducer: PlanetReducer,
  species_reducer: SpeciesReducer
})

export default rootReducer;