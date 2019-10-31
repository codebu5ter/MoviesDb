import {ADD_FAV,REMOVE_FAV} from '../constants'
function addToFavorite(state = [], action) {
  switch(action.type) {
    case ADD_FAV:
      console.log("Movies added to favorite", action.movie);
      let favoriteMovies = [...state, action.movie];
      return favoriteMovies;
    case REMOVE_FAV:
      favoriteMovies = state.filter(item=> item.id !== action.movie.id);
      return favoriteMovies;
    default:
      return state;
  }
}

export default addToFavorite;
