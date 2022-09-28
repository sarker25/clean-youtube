import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import CustomSnackbar from "../Snackbar";
import { useState } from "react";

const PlaylistCardItem = ({ item }) => {
  const { items } = useStoreState((state) => state.favorite);

  const { addToFavorite, removeFromFavorite } = useStoreActions(
    (actions) => actions.favorite
  );
  const { deletePlaylist } = useStoreActions((actions) => actions.playlists);
  const { removeFromRecent } = useStoreActions((actions) => actions.recent);

  // sncakbar
  const [openAlert, setAlertOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");
  const handleAlert = (severity, message) => {
    setAlertOpen(true);
    setSeverity(severity);
    setMessage(message);
  };
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };

  // delete handler
  const deleteHandler = (playlistId) => {
    deletePlaylist(playlistId);
    removeFromFavorite(playlistId);
    removeFromRecent(playlistId);
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 1,
        position: "relative",
      }}
    >
      <CardMedia component="img" image={item.thumbnail.url} alt={item.title} />
      <Stack
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "2px solid white",
          borderRadius: "50%",
          height: "35px",
          width: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <Tooltip title="Delete" sx={{ color: "#fff" }}>
          <IconButton
            onClick={() => {
              deleteHandler(item.id);
              handleAlert("error", "Playlist Deleted    ");
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <CardContent>
        <Typography variant="h6" color="text.primary">
          {item.title.length > 60
            ? item.title.substr(0, 58) + "..."
            : item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.channelTitle}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button to={`/player/${item.id}`} component={RouterLink}>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <PlayCircleOutlineIcon />
            <Typography variant="body2" fontWeight={600}>
              Start Tutorial
            </Typography>
          </Stack>
        </Button>
        <Stack>
          {items.includes(item.id) ? (
            <Button
              onClick={() => {
                removeFromFavorite(item.id);
                handleAlert("error", "Remove From Favorite");
              }}
              title="Remove From Favorite"
            >
              <FavoriteIcon />
            </Button>
          ) : (
            <Button
              onClick={() => {
                addToFavorite(item.id);
                handleAlert("success", "Added To Favorite");
              }}
              title="Add To Favorite"
            >
              <FavoriteBorderIcon />
            </Button>
          )}
        </Stack>
      </CardActions>
      <CustomSnackbar
        open={openAlert}
        handleAlert={handleAlertClose}
        severity={severity}
        message={message}
      />
    </Card>
  );
};

export default PlaylistCardItem;
