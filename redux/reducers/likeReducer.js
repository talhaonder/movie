// reducers/favouriteReducer.js
const initialState = [];

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default favouriteReducer;
