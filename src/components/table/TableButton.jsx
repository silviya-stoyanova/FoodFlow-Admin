import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableButton = ({ title, color, icon, clickHandler }) => (
  <Tooltip title={title}>
    <IconButton color={color} style={{ padding: 4 }} onClick={clickHandler}>
      <FontAwesomeIcon icon={icon} size="sm" />
    </IconButton>
  </Tooltip>
);

export default TableButton;
