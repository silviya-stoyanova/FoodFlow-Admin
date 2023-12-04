import React from "react";
import { Box } from "@mui/material";
import { getCellContentColor } from "../../utils/cell-actions";

const Status = ({ cellValue }) => (
  <Box
    component="span"
    sx={(theme) => ({
      display: "inline-block",
      minWidth: "70px",
      p: "6px 12px",
      textAlign: "center",
      border: "1px solid",
      borderRadius: "3px",
      borderColor: getCellContentColor(theme, cellValue),
      color: getCellContentColor(theme, cellValue),
    })}
  >
    {cellValue}
  </Box>
);

export default Status;
