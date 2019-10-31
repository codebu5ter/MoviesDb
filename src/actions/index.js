import {MOVIES,ADD_FAV,REMOVE_FAV} from '../constants'
export function movies(items) {
  const action = {
    type: MOVIES,
    items
  }
  return action;
}

export function addToFavorite(movie) {
  return {
    type: ADD_FAV,
    movie
  }
}

export function removeFromFavorite(movie) {
  return {
    type: REMOVE_FAV,
    movie
  }
}
