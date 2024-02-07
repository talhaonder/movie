import { combineReducers } from 'redux';
import favoriteReducer from '../containers/Home/reducer';

const rootReducer = combineReducers({
  favorite: favoriteReducer,
});

export default rootReducer;
