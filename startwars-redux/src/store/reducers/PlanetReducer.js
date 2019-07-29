import * as actionTypes from '../actions/ActionTypes'

const initialState  = {
  is_fetching_planets: false,
  fetching_planets_success: false,
  fetching_planets_error: null,
  is_fetching_planet: false,
  fetching_planet_success: false,
  fetching_planet_error: null,
  is_fetching_planet_residents: false,
  fetching_planet_residents_success: false,
  fetching_planet_residents_error: null,
  is_fetching_planet_movies: false,
  fetching_planet_movies_success: false,
  fetching_planet_movies_error: null,
  planet: null,
  planet_residents: [],
  planet_movies: [],
  planets: []
}

export default(state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCHING_PLANET:
      return {
        ...state,
        is_fetching_planet: true
      }

    case actionTypes.FETCHING_PLANET_SUCCESS:
      console.log(action)
      return {
        ...state,
        is_fetching_planet: false,
        planet: action.payload
      }

    case actionTypes.FETCHING_PLANET_FAILURE:
      return {
        ...state,
        is_fetching_planet: false,
        fetching_planet_error: action.payload
      }

    case actionTypes.FETCHING_PLANETS:
        return {
          ...state,
          is_fetching_planets: true
        }
  
    case actionTypes.FETCHING_PLANETS_SUCCESS:
      return {
        ...state,
        is_fetching_planets: false,
        planets: action.payload
      }

    case actionTypes.FETCHING_PLANETS_FAILURE:
      return {
        ...state,
        is_fetching_planets: false,
        fetching_planets_error: action.payload
      }

    case actionTypes.FETCHING_PLANET_RESIDENTS:
      return {
        ...state,
        is_fetching_planet_residents: true
      }

    case actionTypes.FETCHING_PLANET_RESIDENTS_SUCCESS:
      return {
        ...state,
        is_fetching_planet_residents: false,
        planet_residents: action.payload
      }

    case actionTypes.FETCHING_PLANET_RESIDENTS_FAILURE:
      return {
        ...state,
        is_fetching_planet_residents: false,
        fetching_planet_residents_error: action.payload
      }

    case actionTypes.FETCHING_PLANET_MOVIES:
        return {
          ...state,
          is_fetching_planet_movies: true
        }

    case actionTypes.FETCHING_PLANET_MOVIES_SUCCESS:
      return {
        ...state,
        is_fetching_planet_movies: false,
        planet_movies: action.payload
      }

    case actionTypes.FETCHING_PLANET_MOVIES_FAILURE:
      return {
        ...state,
        is_fetching_planet_movies: false,
        fetching_planet_movies_error: action.payload
      }

    case actionTypes.RESET_PLANET_ATTRIBUTES:
      return {
        ...state,
        planet_movies: [],
        planet_residents: []
      }
    

    default:
      return state
  }
}