import React from "react";
import { Grid } from "@mui/material";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { tableProps } from "../../utils/table-props";
import TableRowActions from "./TableRowActions";
import TableTitle from "./TableTitle";

const Table = ({ data, columns, setData, title, handleSaveData }) => {
  const table = useMaterialReactTable({
    data,
    columns,
    onEditingRowSave: handleSaveData,
    renderTopToolbarCustomActions: () => <TableTitle title={title} />,   
    renderRowActions: ({ row, table }) => (
      <TableRowActions row={row} table={table} setData={setData} />
      ),
    ...tableProps,
  });

  return (
    <Grid container display="flex" justifyContent="center">
      <Grid item xs={12} md={10}>
        <MaterialReactTable table={table} />
      </Grid>
    </Grid>
  );
};

export default Table;
