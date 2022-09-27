import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, useEffect } from "react";
import extractLink from "../../utils/linkExtractor";
import { useStoreActions, useStoreState } from "easy-peasy";
import CustomSnackbar from "../Snackbar";

// component
const PlaylistForm = ({ open, handleCloseForm }) => {
  const { getPlaylist } = useStoreActions((actions) => actions.playlists);
  const { addToRecent } = useStoreActions((actions) => actions.recent);
  const { data } = useStoreState((state) => state.playlists);

  // local state
  const [text, setText] = useState("");
  const [initial, setInitial] = useState(false);
  const [valid, setValid] = useState(false);
  const [exist, setExist] = useState("");
  const [openAlert, setAlertOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("Playlist Addes Successfully");
  // initial open form
  useEffect(() => {
    if (!Object.values(data).length) {
      setInitial(true);
    }
  }, []);
  // cancel button
  const handleCancel = () => {
    handleCloseForm();
    setText("");
    setValid(false);

    setExist("");
  };

  // form submit function
  const handleSUbmit = () => {
    const playlistId = extractLink(text);

    if (playlistId) {
      if (data[playlistId]) {
        setExist("Playlist Already Exist");
        setValid(true);
        setSeverity("error");
        setMessage("Playlist Already Exist");
        handleAlert();
      } else {
        setSeverity("success");
        setMessage("Playlist Added Successfully");
        handleAlert();
        getPlaylist(playlistId);
        addToRecent(playlistId);
        handleAlert();
        setValid(false);
        setInitial(false);
        handleCloseForm();
        setText("");
      }
    } else {
      setValid(true);
      setExist("Invalid Id or link");
      setSeverity("error");
      setMessage("Invalid Playlist ID or Link");
      handleAlert();
    }
  };
  // alertbox function
  const handleAlert = () => {
    setAlertOpen(true);
  };
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };
  return (
    <div>
      <Dialog open={open || initial} onClose={handleCloseForm}>
        <DialogTitle>Add Playlsit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new playlist please insert a playlist id or link. please
            make sure the link is correct. Otherwise we cannt fetch playlist
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            value={text}
            id="name"
            label={
              valid
                ? exist
                  ? exist
                  : "Invalid PlaylistId or Link"
                : "Playlist id or link"
            }
            fullWidth
            error={valid}
            onChange={(e) => setText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="outlined" color="success" onClick={handleSUbmit}>
            Add Playlist
          </Button>
        </DialogActions>
      </Dialog>
      <CustomSnackbar
        open={openAlert}
        handleAlert={handleAlertClose}
        severity={severity}
        message={message}
      />
    </div>
  );
};

export default PlaylistForm;
