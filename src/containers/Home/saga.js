// saga.js
import { takeLatest, put } from 'redux-saga/effects';
import { TOGGLE_FAVORITE, toggleFavoriteSuccess, toggleFavoriteFailure } from '../Home/actions';

// Favori işlemlerini gerçekleştiren Saga
export function* toggleFavoriteSaga(action) {
  try {
    // Burada favori durumunu güncelleme işlemleri yapılır
    const movieId = action.payload;
    // Örneğin, favori işlemi başarılı olduğunda toggleFavoriteSuccess action dispatch edilebilir
    yield put(toggleFavoriteSuccess(movieId));
  } catch (error) {
    // Favori işlemi başarısız olduğunda toggleFavoriteFailure action dispatch edilebilir
    yield put(toggleFavoriteFailure(error));
  }
}

// Redux Saga'ya favori işlemlerini dinlemesi için bir watcher oluşturuyoruz
export default function* favoriteSaga() {
  yield takeLatest(TOGGLE_FAVORITE, toggleFavoriteSaga);
}
