import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/system";
import { Button } from "@mui/material";
import { useState } from "react";
import Link from "@mui/material/Link";
import PlaylistForm from "../playlist-form";
import { Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";

const Navbar = ({ handleFilter }) => {
  const [filter, setFilter] = useState("all");

  // const addFilter = () => {
  //   handleFilter(filter);
  // };
  useEffect(() => {
    handleFilter(filter);
  }, []);
  useEffect(() => {
    handleFilter(filter);
  }, [filter]);
  const handleChange = (e) => {
    setFilter(e.target.value);
    handleFilter(filter);
  };
  return (
    <Box sx={{ flexGrow: 1 }} style={{ zIndex: "2000" }}>
      <AppBar position="fixed" color="default" sx={{ py: 0.5 }}>
        <Container maxWidth={"lg"}>
          <Toolbar>
            <Stack spacing={1} sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                component={RouterLink}
                sx={{
                  textDecoration: "none",
                  color: "#555  ",
                  "&:hover": {
                    color: "gray",
                  },
                }}
              >
                <Typography variant="h4">Clean Youtube</Typography>
              </Link>

              <Typography variant="body-1" color={"gray"}>
                By Sarker
              </Typography>
            </Stack>
            <FormControl sx={{ width: "130px", marginRight: "10px" }}>
              <InputLabel>Your</InputLabel>
              <Select value={filter} label="Your" onChange={handleChange}>
                <MenuItem value="all">Playlists</MenuItem>
                <MenuItem value="favorite">Favorite</MenuItem>
                <MenuItem value="recent">Recent</MenuItem>
              </Select>
            </FormControl>
            {/* <Button
              variant="contained"
              onClick={handleClickOpen}
              sx={{ padding: "15px 10px" }}
            >
              Add Playlist
            </Button> */}
          </Toolbar>
        </Container>
        {/* <PlaylistForm open={open} handleClose={handleClose} /> */}
      </AppBar>
    </Box>
  );
};
export default Navbar;
