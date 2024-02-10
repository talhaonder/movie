// reducers/index.js
import { combineReducers } from 'redux';
import favouriteReducer from './likeReducer';// Burada favouriteReducer'ı doğru bir şekilde import ettiğinizden emin olun.

const rootReducer = combineReducers({
  favourites: favouriteReducer, // Her bir anahtarın bir reducer olması gerekiyor.
});

export default rootReducer;
