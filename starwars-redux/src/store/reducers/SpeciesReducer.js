import * as actionTypes from '../actions/ActionTypes';

const initialState  = {
  is_fetching_all_species: false,
  fetching_all_species_success: false,
  fetching_all_species_error: null,
  is_fetching_species: false,
  fetching_species_success: false,
  fetching_species_error: null,
  is_fetching_species_characters: false,
  fetching_species_characters_success: false,
  fetching_species_characters_error: null,
  is_fetching_species_movies: false,
  fetching_species_movies_success: false,
  fetching_species_movies_error: null,
  is_fetching_species_homeworld: false,
  fetching_species_homeworld_success: false,
  fetching_species_homeworld_error: null,
  all_species: [],
  species: null,
  species_movies: [],
  species_characters: [],
  species_homeworld: null,
  next: null,
  prev: null
}

export default(state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCHING_ALL_SPECIES:
      return {
        ...state,
        is_fetching_all_species: true,
      }

    case actionTypes.FETCHING_ALL_SPECIES_SUCCESS:
      return {
        ...state,
        is_fetching_all_species: false,
        all_species: action.payload.results,
        next: action.payload.next,
        prev: action.payload.previous
      }

    case actionTypes.FETCHING_ALL_SPECIES_FAILURE:
      return {
        ...state,
        is_fetching_all_species: false,
        fetching_all_species_error: action.payload
      }

    case actionTypes.FETCHING_SPECIES:
        return {
          ...state,
          is_fetching_species: true,
        }
  
    case actionTypes.FETCHING_SPECIES_SUCCESS:
      return {
        ...state,
        is_fetching_species: false,
        species: action.payload,
      }

    case actionTypes.FETCHING_SPECIES_FAILURE:
      return {
        ...state,
        is_fetching_species: false,
        fetching_species_error: action.payload
      }

    case actionTypes.FETCHING_SPECIES_CHARACTERS:
        return {
          ...state,
          is_fetching_species_characters: true,
        }
  
    case actionTypes.FETCHING_SPECIES_CHARACTERS_SUCCESS:
      return {
        ...state,
        is_fetching_species_characters: false,
        species_characters: action.payload,
      }

    case actionTypes.FETCHING_SPECIES_CHARACTERS_FAILURE:
      return {
        ...state,
        is_fetching_species_characters: false,
        fetching_species_characters_error: action.payload
      }

    case actionTypes.FETCHING_SPECIES_MOVIES:
        return {
          ...state,
          is_fetching_species_movies: true,
        }
  
    case actionTypes.FETCHING_SPECIES_MOVIES_SUCCESS:
      return {
        ...state,
        is_fetching_species_movies: false,
        species_movies: action.payload,
      }

    case actionTypes.FETCHING_SPECIES_MOVIES_FAILURE:
      return {
        ...state,
        is_fetching_species_movies: false,
        fetching_species_movies_error: action.payload
      }

    case actionTypes.FETCHING_SPECIES_HOMEWORLD:
      return {
        ...state,
        is_fetching_species_homeworld: true
      }

    case actionTypes.FETCHING_SPECIES_HOMEWORLD_SUCCESS:
      return {
        ...state,
        is_fetching_species_homeworld: false,
        species_homeworld: action.payload
      }

    case actionTypes.FETCHING_SPECIES_HOMEWORLD_FAILURE:
      return {
        ...state,
        is_fetching_species_homeworld: false,
        fetching_species_homeworld_error: action.payload
      }

    case actionTypes.RESET_SPECIES_ATTRIBUTES:
      return {
        ...state,
        species_characters: [],
        species_homeworld: null,
        species_movies: []
      }

    default:
      return state;
  }
}