import * as actionTypes from '../actions/ActionTypes'

const initialState  = {
  is_fetching_characters: false,
  fetching_characters_success: false,
  fetching_characters_error: null,
  is_fetching_character: false,
  fetching_character_success: false,
  fetching_character_error: null,
  is_fetching_character_homeworld: false,
  fetching_character_homeworld_success: false,
  fetching_character_homeworld_error: null,
  is_fetching_character_movies: false,
  fetching_character_movies_success: false,
  fetching_character_movies_error: null,
  characters: [],
  next: null,
  prev: null,
  character: null,
  character_homeworld: null,
  character_species: null,
  character_movies: []
}

export default(state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCHING_CHARACTER:
      return {
        ...state,
        is_fetching_character: true
      }

    case actionTypes.FETCHING_CHARACTER_SUCCESS:
      return {
        ...state,
        is_fetching_character: false,
        fetching_character_success: true,
        character: action.payload
      }

    case actionTypes.FETCHING_CHARACTER_FAILURE:
      return {
        ...state,
        is_fetching_character: false,
        fetching_character_error: action.payload
      }

    case actionTypes.FETCHING_CHARACTER_HOMEWORLD:
      return {
        ...state,
        is_fetching_character_homeworld: true
      }

    case actionTypes.FETCHING_CHARACTER_HOMEWORLD_SUCCESS:
      return {
        ...state,
        is_fetching_character_homeworld: false,
        character_homeworld: action.payload
      }
    
    case actionTypes.FETCHING_CHARACTER_HOMEWORLD_FAILURE:
      return {
        ...state,
        is_fetching_character_homeworld: false,
        fetching_character_homeworld_error: action.payload
      }

    case actionTypes.FETCHING_CHARACTERS:
      return {
        ...state,
        is_fetching_characters: true
      }

    case actionTypes.FETCHING_CHARACTERS_SUCCESS:
      return {
        ...state,
        is_fetching_characters: false,
        characters: action.payload.results,
        next: action.payload.next,
        prev: action.payload.previous
      }

    case actionTypes.FETCHING_CHARACTER_SPECIES_SUCCESS:
      return {
        ...state,
        character_species: action.payload
      }

    case actionTypes.FETCHING_CHARACTER_MOVIES:
      return {
        ...state,
        is_fetching_character_movies: true
      }

    case actionTypes.FETCHING_CHARACTER_MOVIES_SUCCESS:
      return {
        ...state,
        is_fetching_character_movies: false,
        character_movies: action.payload
      }

    case actionTypes.FETCHING_CHARACTER_MOVIES_FAILURE:
      return {
        ...state,
        is_fetching_character_movies: false,
        fetching_character_movies_error: action.payload
      }

    case actionTypes.RESET_CHARACTER_ATTRIBUTES:
      return {
        ...state,
        character_homeworld: null,
        character_movies: [],
        character_species: null
      }

    default:
      return state;
  }
}