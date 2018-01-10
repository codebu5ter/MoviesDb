import { ADD_FAV } from '../actions';

function addToFavorite(state = [], action) {
  switch(action.type) {
    case ADD_FAV:
      console.log("Movies added to favorite", action.movie);
      return state;
    default:
      return state;
  }
}

export default addToFavorite;
