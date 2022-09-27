import { createStore, persist } from "easy-peasy";
import favoriteModel from "./favoriteModel";
import playlistModel from "./playlistsModel";
import recentModel from "./recentModel";

const store = createStore(
  persist(
    {
      playlists: playlistModel,
      favorite: favoriteModel,
      recent: recentModel,
    },
    {
      storage: "localStorage",
    }
  )
);

export default store;
