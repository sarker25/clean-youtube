import React, { useState } from "react";
import { Container } from "@mui/system";
import { Button, Grid, Stack, Typography } from "@mui/material";
import VideoPlayer from "../../VideoPlayer";
import { useParams } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import VideoLists from "../../Items";
import { useEffect } from "react";
import Editor from "../../Editor";

const PLayer = () => {
  const { data } = useStoreState((state) => state.playlists);
  const { data: noteData } = useStoreState((state) => state.note);
  const { getPlaylist } = useStoreActions((actions) => actions.playlists);
  const { addtoNote } = useStoreActions((actions) => actions.note);
  const { playlistId } = useParams();

  const playlist = data[playlistId];
  if (!playlist) {
    getPlaylist(playlistId);
  }
  const playlistVideos = playlist.items;
  const [currentItem, setCurrentItem] = useState(playlistVideos[0]);
  const [note, setNote] = useState("");

  const itemClickHandler = (item) => {
    setCurrentItem(item);
  };

  const submitNote = () => {
    addtoNote({ playlistId, videoId: currentItem.id, note });
  };

  return (
    <Container maxWidth={"lg"} sx={{ my: 13 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={8}>
          <VideoPlayer videoId={currentItem.id} />
          <Typography variant="h6" sx={{ marginTop: "20px", width: "100%" }}>
            {currentItem.title}
          </Typography>

          <Stack>
            {/* <Button variant="contained">Add Note</Button>
            <Typography variant="subtitle-1">Notes</Typography> */}
            {/* 
            <Editor
              setNote={setNote}
              // value={noteData[playlistId][currentItem.id]}
            /> */}
          </Stack>
          {/* <Stack>
            {noteData[playlistId][currentItem.id] && (
              <>
                <Typography>{noteData[playlistId][currentItem.id]}</Typography>
                <p>paragraph</p>
              </>
            )}
          </Stack> */}
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <VideoLists
            playlistVideos={playlistVideos}
            currentItem={currentItem}
            itemClickHandler={itemClickHandler}
          />
          <Stack sx={{ marginTop: "20px" }}>
            <p>Random Playlist</p>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PLayer;
