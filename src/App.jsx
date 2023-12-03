import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Table from "./components/TableWithLocalizationProvider";

import "@fortawesome/fontawesome-svg-core/styles.css";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Table />
    </LocalizationProvider>
  );
}

export default App;
