import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = [];

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_FAVOURITES':
      return action.payload;
    case 'TOGGLE_FAVOURITE':
      const { id } = action.payload;
      if (state.includes(id)) {
        return state.filter(itemId => itemId !== id);
      } else {
        return [...state, id];
      }
    default:
      return state;
  }
};

export const loadFavouritesFromStorage = () => async dispatch => {
  try {
    const favouritesJson = await AsyncStorage.getItem('favourites');
    if (favouritesJson !== null) {
      const favourites = JSON.parse(favouritesJson);
      dispatch({ type: 'LOAD_FAVOURITES', payload: favourites });
    }
  } catch (error) {
    console.error('Error loading favourites from AsyncStorage:', error);
  }
};

export default favouriteReducer;
