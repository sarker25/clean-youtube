import { createStore, persist } from "easy-peasy";
import favoriteModel from "./favoriteModel";
import noteModel from "./noteModel";
import playlistModel from "./playlistsModel";
import recentModel from "./recentModel";

const store = createStore(
  persist(
    {
      playlists: playlistModel,
      favorite: favoriteModel,
      recent: recentModel,
      note: noteModel,
    },
    {
      storage: "localStorage",
    }
  )
);

export default store;
