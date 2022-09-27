import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar = ({ open, handleAlert, message, severity }) => {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleAlert}>
        <Alert onClose={handleAlert} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
        {/* <Alert severity="error">This is an error message!</Alert> */}
      </Snackbar>
    </Stack>
  );
};
export default CustomSnackbar;
