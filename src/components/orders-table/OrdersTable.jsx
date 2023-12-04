import React, { useState, useEffect, useMemo } from "react";
import { faFileInvoiceDollar, faClose, faUserCheck, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { formatCellWithDate, formatBooleanCellWithIcon, styleCellWithIcon } from "../../utils/cell-actions";
import { MANAGE_ORDERS_TITLE, STATUSES } from "../../utils/constants";
import { getOrdersData } from "../../services/get-data";
import Table from "../table/Table";
import Status from "./Status";

const OrdersTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      var ordersData = await getOrdersData();
      setData(ordersData);
    })();
  }, []);

  const handleSaveData = ({ row, values, table }) => {
    setData((prevData) => {
      return prevData.map((data) =>
        data.orderNumber === row.original.orderNumber
          ? ((data.status = values.status), data)
          : data
      );
    });

    table.setEditingRow(null);
  };

  const columns = useMemo(
    () => [
      {
        header: "#",
        accessorKey: "orderNumber",
        enableColumnFilter: false,
        enableEditing: false,
        size: 10,
      },
      {
        header: "Created",
        id: "createdDate",
        accessorFn: (row) => row.createdDate instanceof Date && row.createdDate,
        sortingFn: "datetime",
        filterVariant: "date",
        filterFn: "betweenInclusive",
        enableEditing: false,
        Cell: ({ cell }) => formatCellWithDate(cell),
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
        Cell: ({ cell }) => formatCellWithDate(cell),
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
        size: 110,
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
        muiTableBodyCellProps: styleCellWithIcon(),
        Cell: ({ cell }) =>
          formatBooleanCellWithIcon(cell, faFileInvoiceDollar, faClose),
      },
      {
        header: "Paid",
        accessorKey: "isPaid",
        filterVariant: "checkbox",
        enableEditing: false,
        size: 50,
        muiTableBodyCellProps: styleCellWithIcon(),
        Cell: ({ cell }) => formatBooleanCellWithIcon(cell, faSackDollar, faClose),
      },
      {
        header: "New client",
        accessorKey: "isNewCustomer",
        filterVariant: "checkbox",
        enableEditing: false,
        size: 50,
        muiTableBodyCellProps: styleCellWithIcon(),
        Cell: ({ cell }) => formatBooleanCellWithIcon(cell, faUserCheck, faClose),
      },
      {
        header: "Status",
        accessorKey: "status",
        editVariant: "select",
        editSelectOptions: [STATUSES.NEW, STATUSES.PROCESSING, STATUSES.DELIVERED, STATUSES.REJECTED],
        size: 50,
        Cell: ({ cell }) => <Status cellValue={cell.getValue()} />,
      },
    ],
    [data]
  );

  return (
    <Table
      data={data}
      columns={columns}
      setData={setData}
      title={MANAGE_ORDERS_TITLE}
      handleSaveData={handleSaveData}
    />
  );
};

export default OrdersTable;
