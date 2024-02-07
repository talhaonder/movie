import { takeLatest, put } from 'redux-saga/effects';
import { TOGGLE_FAVORITE } from '../Home/types';
import { addFavorite, removeFavorite } from '../Home/actions'; // Eylemleri doğrudan alma

export function* toggleFavoriteSaga(action) {
  try {
    // Burada favori durumunu güncelleme işlemleri yapılır
    const movieId = action.payload;
    // Örneğin, favori işlemi başarılı olduğunda ilgili eylemi tetikleyebiliriz
    yield put(addFavorite(movieId)); // Örnek olarak, favori ekleme işlemi başarılı olduğunda addFavorite eylemini tetikleyebiliriz
  } catch (error) {
    // Favori işlemi başarısız olduğunda ilgili eylemi tetikleyebiliriz
    yield put(removeFavorite(movieId)); // Örnek olarak, favori ekleme işlemi başarısız olduğunda removeFavorite eylemini tetikleyebiliriz
  }
}

export default function* favoriteSaga() {
  yield takeLatest(TOGGLE_FAVORITE, toggleFavoriteSaga);
}
