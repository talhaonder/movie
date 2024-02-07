// actions.js
import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITE } from './types';

export const addFavorite = (movieId) => ({
  type: ADD_FAVORITE,
  payload: movieId,
});

export const removeFavorite = (movieId) => ({
  type: REMOVE_FAVORITE,
  payload: movieId,
});

export const toggleFavorite = (movieId) => ({
  type: TOGGLE_FAVORITE,
  payload: movieId,
});
