import React, { useState, useEffect, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, Tooltip } from "@mui/material";
import {
  faFileInvoiceDollar,
  faClose,
  faUserCheck,
  faSackDollar,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { mockedData, statuses } from "../data/mock-data";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(mockedData);
  }, []);

  const columns = useMemo(
    () => [
      {
        header: "Order",
        accessorKey: "orderNumber",
        enableColumnFilter: false,
        enableEditing: false,
        size: 50,
      },
      {
        header: "Created",
        id: "createdDate",
        accessorFn: (row) => row.createdDate instanceof Date && row.createdDate,
        sortingFn: "datetime",
        filterVariant: "date",
        filterFn: "betweenInclusive",
        enableEditing: false,
        Cell: ({ cell }) =>
          cell.getValue() instanceof Date &&
          cell.getValue().toLocaleDateString("en-GB", "dd/MM/YYYY"),
        size: 50,
      },
      {
        header: "Delivered",
        id: "deliveredDate",
        accessorFn: (row) =>
          row.deliveredDate instanceof Date && row.deliveredDate,
        sortingFn: "datetime",
        filterVariant: "date",
        filterFn: "betweenInclusive",
        enableEditing: false,
        Cell: ({ cell }) =>
          cell.getValue() instanceof Date &&
          cell.getValue().toLocaleDateString("en-GB", "dd/MM/YYYY"),
        size: 50,
      },
      {
        header: "Payment",
        accessorKey: "paymentMethod",
        enableEditing: false,
        size: 50,
      },
      {
        header: "Customer",
        accessorKey: "customerName",
        enableColumnFilter: false,
        enableEditing: false,
        size: 50,
      },
      {
        header: "Amount",
        accessorKey: "orderAmount",
        enableColumnFilter: false,
        enableEditing: false,
        size: 50,
      },
      {
        header: "Invoice",
        accessorKey: "hasInvoice",
        enableColumnFilter: false,
        enableEditing: false,
        size: 50,
        muiTableBodyCellProps: {
          align: "center",
          sx: {
            paddingRight: "40px",
          },
        },
        Cell: ({ cell }) =>
          cell.getValue() === true ? (
            <FontAwesomeIcon
              icon={faFileInvoiceDollar}
              color="#1976d2"
              size="xl"
            />
          ) : (
            <FontAwesomeIcon icon={faClose} color="red" size="xl" />
          ),
      },
      {
        header: "Paid",
        accessorKey: "isPaid",
        filterVariant: "checkbox",
        enableEditing: false,
        size: 50,
        muiTableBodyCellProps: {
          align: "center",
          sx: {
            paddingRight: "40px",
          },
        },
        Cell: ({ cell }) =>
          cell.getValue() === true ? (
            <FontAwesomeIcon icon={faSackDollar} color="#1976d2" size="xl" />
          ) : (
            <FontAwesomeIcon icon={faClose} color="red" size="xl" />
          ),
      },
      {
        header: "New client",
        accessorKey: "isNewCustomer",
        filterVariant: "checkbox",
        enableEditing: false,
        size: 50,
        muiTableBodyCellProps: {
          align: "center",
          sx: {
            paddingRight: "40px",
          },
        },
        Cell: ({ cell }) =>
          cell.getValue() === true ? (
            <FontAwesomeIcon icon={faUserCheck} color="#1976d2" size="xl" />
          ) : (
            <FontAwesomeIcon icon={faClose} color="red" size="xl" />
          ),
      },
      {
        header: "Status",
        accessorKey: "status",
        editVariant: "select",
        editSelectOptions: statuses,
        size: 50,
        Cell: ({ cell }) => {
          const cellValue = cell.getValue();

          return (
            <Box
              component="span"
              sx={(theme) => ({
                backgroundColor:
                  cellValue === statuses[0] // new
                    ? theme.palette.success.light
                    : cellValue === statuses[1] // processing
                    ? theme.palette.info.main
                    : cellValue === statuses[2] // delivered
                    ? theme.palette.success.dark
                    : cellValue === statuses[3] // rejected
                    ? theme.palette.error.dark
                    : "",
                borderRadius: "3px",
                color: "#FFF",
                minWidth: "70px",
                display: "inline-block",
                p: "8px 12px",
                textAlign: "center",
              })}
            >
              {cellValue}
            </Box>
          );
        },
      },
    ],
    [data]
  );

  const openDeleteConfirmModal = (row) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setData((prevData) => {
        const newData = prevData.filter(
          (data) => data.orderNumber !== row.original.orderNumber
        );
        return newData;
      });
    }
  };

  const handleSaveData = ({ row, values, table }) => {
    setData((prevData) => {
      const newData = prevData.map((data) => {
        if (data.orderNumber === row.original.orderNumber) {
          data.status = values.status;
        }
        return data;
      });

      return newData;
    });

    table.setEditingRow(null);
  };

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: false,
    positionActionsColumn: "last",
    editDisplayMode: "row",
    enableEditing: true,
    onEditingRowSave: handleSaveData,
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex" }}>
        <Tooltip title="Edit">
          <IconButton
            style={{ padding: 4 }}
            onClick={() => table.setEditingRow(row)}
          >
            <FontAwesomeIcon icon={faEdit} color="#1976d2" size="sm" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            color="error"
            style={{ padding: 4 }}
            onClick={() => openDeleteConfirmModal(row)}
          >
            <FontAwesomeIcon icon={faTrashAlt} size="sm" />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    initialState: {
      showColumnFilters: false,
      showGlobalFilter: true,
      pagination: { pageSize: 5 },
    },
    density: "spacious",
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
    muiPaginationProps: {
      color: "primary",
      shape: "rounded",
      variant: "outlined",
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Table;
