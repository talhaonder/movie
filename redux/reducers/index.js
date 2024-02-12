import { combineReducers } from 'redux';
import favouriteReducer from './likeReducer';

const rootReducer = combineReducers({
  favourites: favouriteReducer, // Her bir anahtarın bir reducer olması gerekiyor.
});

export default rootReducer;
