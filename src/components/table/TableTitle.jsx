import React from "react";
import { Box, Typography } from "@mui/material";

const TableTitle = ({ title }) => (
  <Box m={1}>
    <Typography variant="h5" color="textPrimary">
      {title}
    </Typography>
  </Box>
);

export default TableTitle;
