import { action } from "easy-peasy";

const recentModel = {
  items: [],
  addToRecent: action((state, playlistId) => {
    state.items = [playlistId, ...state.items];
    state.items = state.items.slice(0, 5);
  }),
  removeFromRecent: action((state, playlistId) => {
    state.items = state.items.filter((item) => item !== playlistId);
  }),
};

export default recentModel;
