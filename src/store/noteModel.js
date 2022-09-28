import { action } from "easy-peasy";

const noteModel = {
  data: {},
  addtoNote: action((state, payload) => {
    state.data[payload.playlistId] = {
      ...state.data[payload.playlistId],
      [payload.videoId]: payload.note,
    };
  }),
};

export default noteModel;
