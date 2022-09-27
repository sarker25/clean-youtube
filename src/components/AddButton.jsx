import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useStoreState } from "easy-peasy";
import PlaylistForm from "./playlist-form";
import { useEffect } from "react";
const AddButton = () => {
  const { data } = useStoreState((state) => state.playlists);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseForm = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        title="Add Playlist"
        onClick={handleClickOpen}
        sx={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          fontSize: "60px",
        }}
      >
        <AddIcon fontSize="40px" />
      </Button>
      <PlaylistForm open={open} handleCloseForm={handleCloseForm} />
    </>
  );
};
export default AddButton;
