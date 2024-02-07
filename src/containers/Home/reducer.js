// reducer.js
import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITE } from './types';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload),
      };
    case TOGGLE_FAVORITE:
      if (state.favorites.includes(action.payload)) {
        return {
          ...state,
          favorites: state.favorites.filter((id) => id !== action.payload),
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
    default:
      return state;
  }
};

export default favoriteReducer;
