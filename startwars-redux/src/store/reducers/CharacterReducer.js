import * as actionTypes from '../actions/ActionTypes'

const initialState  = {
  is_fetching_character: false,
  fetching_character_success: false,
  fetching_character_error: null,
  character: null
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

    default:
      return state;
  }
}