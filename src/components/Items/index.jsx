import React from "react";
import List from "@mui/material/List";
import Item from "./Item";

const VideoLists = ({ playlistVideos, currentItem, itemClickHandler }) => {
  return (
    <List
      sx={{
        // width: "100%",
        marginTop: "",
        bgcolor: "background.paper",
        overflowY: "scroll",
        maxHeight: "390px",
        "::-webkit-scrollbar": {
          width: "10px",
          borderTopRightRadius: "50px",
          borderBottomRightRadius: "50px",
          borderTopLeftRadius: "50px",
          borderBottomLeftRadius: "50px",
        },
        "::-webkit-scrollbar-track": {
          background: "#4dabf5",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#1769aa",
        },
      }}
    >
      {playlistVideos &&
        playlistVideos.map((item) => (
          <Item
            key={item.id}
            item={item}
            currentItem={currentItem}
            itemClickHandler={itemClickHandler}
          />
        ))}
    </List>
  );
};

export default VideoLists;
