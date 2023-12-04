import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import OrdersTable from "./components/orders-table/OrdersTable";

import "./styles/index.css";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <OrdersTable />
    </LocalizationProvider>
  );
}

export default App;
