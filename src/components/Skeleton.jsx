import React from "react";

import Skeleton from "@mui/material/Skeleton";
import { Stack } from "@mui/material";
const Skeletons = () => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        width="100%"
        sx={{ margin: 1 }}
        height="280px"
      ></Skeleton>
      <Skeleton
        variant="rectangular"
        width="100%"
        sx={{ margin: 1 }}
        height="60px"
      ></Skeleton>
      <Skeleton width="100%" sx={{ margin: 1 }} height="60px"></Skeleton>
      <Stack direction="row">
        <Skeleton variant="circular" height={"50px"} width="50px"></Skeleton>
        <Skeleton width="100%" sx={{ margin: 1 }} variant=" h4"></Skeleton>
      </Stack>
    </>
  );
};

export default Skeletons;
