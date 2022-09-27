import React, { useState } from "react";
import { Container } from "@mui/system";
import { Grid, Stack, Typography } from "@mui/material";
import VideoPlayer from "../../VideoPlayer";
import { useParams } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import VideoLists from "../../Items";
import { useEffect } from "react";

const PLayer = () => {
  const { data } = useStoreState((state) => state.playlists);
  const { getPlaylist, addToplaylist } = useStoreActions(
    (actions) => actions.playlists
  );
  const { playlistId } = useParams();

  const playlist = data[playlistId];
  if (!playlist) {
    getPlaylist(playlistId);
  }
  const playlistVideos = playlist.items;
  const [currentItem, setCurrentItem] = useState(playlistVideos[0]);
  // const [note, setNote] = useState(currentItem.notes);

  const itemClickHandler = (item) => {
    setCurrentItem(item);
  };
  // console.log(currentItem);
  // const submitNote = () => {
  //   const newPlaylist = {
  //     ...data[playlistId],
  //     items: data[playlistId].items.map((item) => {
  //       if (item.id === currentItem.id) {
  //         return {
  //           ...item,
  //           notes: note,
  //         };
  //       } else {
  //         return item;
  //       }
  //     }),
  //   };

  //   addToplaylist(newPlaylist);
  // };

  // console.log(note);
  return (
    <Container maxWidth={"lg"} sx={{ my: 13 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={8}>
          <VideoPlayer videoId={currentItem.id} />
          <Typography variant="h6" sx={{ marginTop: "20px", width: "100%" }}>
            {currentItem.title}
          </Typography>

          <Stack sx={{ marginTop: "20px" }}>
            <Typography variant="subtitle-1">Notes</Typography>
            {/* <Editor setNote={setNote} /> */}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <VideoLists
            playlistVideos={playlistVideos}
            currentItem={currentItem}
            itemClickHandler={itemClickHandler}
          />
          <Stack sx={{ marginTop: "20px" }}>
            <p>Random Playlist</p>
            {/* {/* <RandomPlaylist itemClickHandler={itemClickHandler} /> */}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PLayer;
