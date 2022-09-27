import React from "react";
import PlaylistCardItem from "../../playlistCardItem";
import { Container } from "@mui/system";
import { Grid, Stack, Typography } from "@mui/material";
import { useStoreState } from "easy-peasy";
import AddButton from "../../AddButton";
import Skeletons from "../../Skeleton";
const Home = ({ currentFilter }) => {
  const { data } = useStoreState((state) => state.playlists);
  const { items: favoriteItems } = useStoreState((state) => state.favorite);
  const { items: recentItems } = useStoreState((state) => state.recent);
  let playlistArray = [];
  const { loading } = useStoreState((state) => state.playlists);
  if (currentFilter === "all") {
    playlistArray = Object.values(data);
  } else if (currentFilter === "favorite") {
    playlistArray = favoriteItems.map((item) => data[item]);
  } else if (currentFilter === "recent") {
    playlistArray = recentItems.map((item) => data[item]);
  }
  // console.log(currentFilter);
  return (
    <Container maxWidth={"lg"} sx={{ my: 13 }}>
      <Grid container>
        {currentFilter === "favorite" && Boolean(!favoriteItems.length) ? (
          <Typography variant="h4">No Favorite Item Added</Typography>
        ) : null}
        {playlistArray.length > 0 &&
          playlistArray.map((item) => (
            <Grid
              key={item.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              sx={{ marginBottom: "10px" }}
            >
              <PlaylistCardItem item={item} />
            </Grid>
          ))}
        {loading && (
          <Grid item xs={12} sm={6} md={4} lg={4} sx={{ marginBottom: "10px" }}>
            <Skeletons />
          </Grid>
        )}
      </Grid>
      <AddButton />
    </Container>
  );
};

export default Home;
