import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DELETE_PROMPT_TEXT, STATUSES } from "./constants";

const { NEW, PROCESSING, DELIVERED, REJECTED } = STATUSES;

const formatCellWithDate = (cell) =>
  cell.getValue() instanceof Date &&
  cell.getValue().toLocaleDateString("en-GB", "dd/MM/YYYY");

const formatBooleanCellWithIcon = (cell, truthyIcon, falsyIcon) =>
  cell.getValue() === true ? (
    <FontAwesomeIcon icon={truthyIcon} color="#656565" size="xl" />
  ) : (
    <FontAwesomeIcon icon={falsyIcon} color="#D32F2F" size="xl" />
  );

const styleCellWithIcon = () => ({
  align: "center",
  sx: {
    paddingRight: "40px",
  },
});

const getCellContentColor = (theme, cellValue) =>
  cellValue === NEW
    ? theme.palette.success.light
    : cellValue === PROCESSING
    ? theme.palette.info.main
    : cellValue === DELIVERED
    ? theme.palette.success.dark
    : cellValue === REJECTED
    ? theme.palette.error.dark
    : "";

const openDeleteConfirmModal = (row, setData) => {
  const confirmed = window.confirm(DELETE_PROMPT_TEXT);

  if (confirmed) {
    setData((prevData) => {
      return prevData.filter(
        (data) => data.orderNumber !== row.original.orderNumber
      );
    });
  }
};

export {
  formatCellWithDate,
  formatBooleanCellWithIcon,
  styleCellWithIcon,
  getCellContentColor,
  openDeleteConfirmModal,
};
