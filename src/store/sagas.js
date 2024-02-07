import { all } from 'redux-saga/effects';
import favoriteSaga from '../containers/Home/saga';

// RootSaga'yı oluşturuyoruz ve tüm sagaları bir araya getiriyoruz
export default function* rootSaga() {
  yield all([
    favoriteSaga(),
    // Diğer sagalar buraya eklenebilir
  ]);
}