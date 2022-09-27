import React from "react";

import { Container } from "@mui/system";
import { Grid, Stack } from "@mui/material";

const NotFound = () => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 13 }}>
      <Grid container>
        <h2 align="center">404 Not Found</h2>
      </Grid>
    </Container>
  );
};

export default NotFound;
