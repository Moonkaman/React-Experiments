import * as actionTypes from './ActionTypes';

const baseURL = 'https://swapi.co/api'

// Movie Action Creators

export const fetch_movies = () => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_MOVIES})
    fetch(baseURL + '/films')
    .then(res => res.json())
    .then(data => {
      dispatch({type: actionTypes.FETCHING_MOVIES_SUCCESS, payload: data.results})
    })
    .catch(err => dispatch({type: actionTypes.FETCHING_MOVIES_FAILURE, payload: err}))
  }
}

export const fetch_movie = id => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_MOVIE});
    fetch(`${baseURL}/films/${id}/`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: actionTypes.FETCHING_MOVIE_SUCCESS, payload: data})
    })
    .catch(err => dispatch({type: actionTypes.FETCHING_MOVIE_FAILURE, payload: 'Could not get movie at this time'}))
  }
}

export const fetch_movie_characters = urls => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_MOVIE_CHARACTERS});
    const characters = []
    urls.forEach(url => {
      characters.push(fetch(url).then(res => res.json()).then(data => data))
    })
    Promise.all(characters)
    .then(data => dispatch({type: actionTypes.FETCHING_MOVIE_CHARACTERS_SUCCESS, payload: data}))
  }
}

export const fetch_movie_planets = urls => {
  return dispatch => {
    
    dispatch({type: actionTypes.FETCHING_MOVIE_PLANETS});
    const planets = []
    urls.forEach(url => {
      planets.push(fetch(url).then(res => res.json()).then(data => data))
    })
    Promise.all(planets)
    .then(data => dispatch({type: actionTypes.FETCHING_MOVIE_PLANETS_SUCCESS, payload: data}))
  }
}

export const reset_movie_attributes = _ => {
  return { type: actionTypes.RESET_MOVIE_ATTRIBUTES };
}

// Character Action Creators

export const fetch_character = id => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_CHARACTER});
    fetch(`${baseURL}/people/${id}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: actionTypes.FETCHING_CHARACTER_HOMEWORLD});
      fetch(data.homeworld)
      .then(res => res.json())
      .then(homeworld => {
        dispatch({type: actionTypes.FETCHING_CHARACTER_SPECIES});
        fetch(data.species)
        .then(res => res.json())
        .then(species => {
          dispatch({type: actionTypes.FETCHING_CHARACTER_SUCCESS, payload: data})
          dispatch({type: actionTypes.FETCHING_CHARACTER_HOMEWORLD_SUCCESS, payload: homeworld})
          dispatch({type: actionTypes.FETCHING_CHARACTER_SPECIES_SUCCESS, payload: species})
        })
      })
  })
  }
}

export const fetch_characters = (url=`${baseURL}/people`) => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_CHARACTERS});

    fetch(url)
    .then(res => res.json())
    .then(data => dispatch({type: actionTypes.FETCHING_CHARACTERS_SUCCESS, payload: data}))
  }
}

export const fetch_character_movies = urls => {
  return dispatch => {
    
    dispatch({type: actionTypes.FETCHING_CHARACTER_MOVIES});
    const movies = []
    urls.forEach(url => {
      movies.push(fetch(url).then(res => res.json()).then(data => data))
    })
    Promise.all(movies)
    .then(data => dispatch({type: actionTypes.FETCHING_CHARACTER_MOVIES_SUCCESS, payload: data}))
  }
}

export const reset_character_attributes = _ => {
  return { type: actionTypes.RESET_CHARACTER_ATTRIBUTES };
}

// Planet Action Creators

export const fetch_planet = id => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_PLANET})
    fetch(`${baseURL}/planets/${id}`)
    .then(res => res.json())
    .then(data => dispatch({type: actionTypes.FETCHING_PLANET_SUCCESS, payload: data}))
  }
}

export const fetch_planets = (url=`${baseURL}/planets`) => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_PLANETS});
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch({type: actionTypes.FETCHING_PLANETS_SUCCESS, payload: data}))
  }
}

export const fetch_planet_residents = urls => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_PLANET_RESIDENTS});
    const residents = []
    urls.forEach(url => {
      residents.push(fetch(url).then(res => res.json()).then(data => data))
    })
    Promise.all(residents)
    .then(data => dispatch({type: actionTypes.FETCHING_PLANET_RESIDENTS_SUCCESS, payload: data}))
  }
}

export const fetch_planet_movies = urls => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_PLANET_MOVIES});
    const movies = []
    urls.forEach(url => {
      movies.push(fetch(url).then(res => res.json()).then(data => data))
    })
    Promise.all(movies)
    .then(data => dispatch({type: actionTypes.FETCHING_PLANET_MOVIES_SUCCESS, payload: data}))
  }
}

export const reset_planet_attributes = _ => {
  return { type: actionTypes.RESET_PLANET_ATTRIBUTES };
}

// Species Action Creators

export const fetch_all_species = (url=`${baseURL}/species`) => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_ALL_SPECIES});
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch({type: actionTypes.FETCHING_ALL_SPECIES_SUCCESS, payload: data}))
  }
}

export const fetch_species = id => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_SPECIES})
    fetch(`${baseURL}/species/${id}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type: actionTypes.FETCHING_SPECIES_HOMEWORLD})
      fetch(data.homeworld)
      .then(res => res.json())
      .then(homeworld => {
        dispatch({type: actionTypes.FETCHING_SPECIES_SUCCESS, payload: data})
        dispatch({type: actionTypes.FETCHING_SPECIES_HOMEWORLD_SUCCESS, payload: homeworld})
      })
    })
  }
}

export const fetch_species_movies = urls => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_SPECIES_MOVIES});
    const movies = []
    urls.forEach(url => {
      movies.push(fetch(url).then(res => res.json()).then(data => data))
    })
    Promise.all(movies)
    .then(data => dispatch({type: actionTypes.FETCHING_SPECIES_MOVIES_SUCCESS, payload: data}))
  }
}

export const fetch_species_characters = urls => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_SPECIES_CHARACTERS});
    const characters = []
    urls.forEach(url => {
      characters.push(fetch(url).then(res => res.json()).then(data => data))
    })
    Promise.all(characters)
    .then(data => dispatch({type: actionTypes.FETCHING_SPECIES_CHARACTERS_SUCCESS, payload: data}))
  }
}

export const fetch_species_homeworld = url => {
  return dispatch => {
    dispatch({type: actionTypes.FETCHING_SPECIES_HOMEWORLD})
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch({type: actionTypes.FETCHING_SPECIES_HOMEWORLD_SUCCESS, payload: data}))
  }
}

export const reset_species_attributes = _ => {
  return { type: actionTypes.RESET_SPECIES_ATTRIBUTES };
}