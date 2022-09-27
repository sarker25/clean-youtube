import { action, thunk } from "easy-peasy";
import getPlaylistByid from "../api";

const playlistModel = {
  data: {},
  loading: false,
  error: "",
  addToplaylist: action((state, playlist) => {
    state.data[playlist.id] = playlist;
  }),
  getPlaylist: thunk(async ({ addToplaylist }, playlistId, { getState }) => {
    if (getState().data[playlistId]) {
      return;
    }
    getState().loading = true;
    let playlist;
    try {
      playlist = await getPlaylistByid(playlistId);
      getState().error = "";
    } catch (e) {
      getState().error =
        e.response?.data?.error?.message || "something went wrong";
    } finally {
      getState().loading = false;
    }

    addToplaylist(playlist);
  }),
  deletePlaylist: action((state, playlistId) => {
    delete state.data[playlistId];
  }),
};

export default playlistModel;
