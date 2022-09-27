import { action } from "easy-peasy";

const favoriteModel = {
  items: [],
  addToFavorite: action((state, playlistId) => {
    state.items = [playlistId, ...state.items];
  }),
  removeFromFavorite: action((state, playlistId) => {
    state.items = state.items.filter((item) => item !== playlistId);
  }),
};

export default favoriteModel;
