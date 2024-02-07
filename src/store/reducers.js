// reducers.js
import { combineReducers } from 'redux';
import favoriteReducer from '../containers/Home/reducer';

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  // Diğer reducer'lar buraya eklenebilir
});

export default rootReducer;
