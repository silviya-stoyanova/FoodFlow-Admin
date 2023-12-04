import React from "react";
import { Box } from "@mui/material";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { TABLE_ACTIONS, COLORS } from "../../utils/constants";
import { openDeleteConfirmModal } from "../../utils/cell-actions";
import TableButton from "./TableButton";

const { ERROR } = COLORS;
const { EDIT, DELETE } = TABLE_ACTIONS;

const TableRowActions = ({ row, table, setData }) => (
  <Box sx={{ display: "flex" }}>
    <TableButton
      title={EDIT}
      icon={faEdit}
      table={table}
      row={row}
      clickHandler={() => table.setEditingRow(row)}
    />
    <TableButton
      title={DELETE}
      color={ERROR}
      icon={faTrashAlt}
      table={table}
      row={row}
      clickHandler={() => openDeleteConfirmModal(row, setData)}
    />
  </Box>
);

export default TableRowActions;
