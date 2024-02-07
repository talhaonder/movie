import { all } from 'redux-saga/effects';
import favoriteSaga from '../containers/Home/saga';

function* rootSaga() {
  yield all([
    favoriteSaga(),
  ]);
}
export default rootSaga;