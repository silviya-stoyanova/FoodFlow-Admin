import { darken, lighten } from "@mui/material";
import { BASE_BACKGROUND_COLOR } from "../utils/constants";

import {
  COLORS,
  COLUMN_FILTER_DISPLAY_MODES,
  DENSITY_MODES,
  DISPLAY_MODES,
  PAGINATION_DISPLAY_MODES,
  POSITION_ACTIONS_MODES,
  SHAPE_MODES,
  SIZE_MODES,
  VARIANT_MODES,
} from "./constants";

const { ROW } = DISPLAY_MODES;
const { SPACIOUS } = DENSITY_MODES;
const { PRIMARY } = COLORS;
const { LAST } = POSITION_ACTIONS_MODES;
const { POPOVER } = COLUMN_FILTER_DISPLAY_MODES;
const { PAGES } = PAGINATION_DISPLAY_MODES;
const { ROUNDED } = SHAPE_MODES;
const { OUTLINED } = VARIANT_MODES;
const { SMALL } = SIZE_MODES;

const tableProps = {
  editDisplayMode: ROW,
  enableEditing: true,
  enableColumnActions: false,
  positionActionsColumn: LAST,
  density: SPACIOUS,
  enableDensityToggle: false,
  enableFullScreenToggle: false,
  enableHiding: false,
  columnFilterDisplayMode: POPOVER,
  paginationDisplayMode: PAGES,
  muiPaginationProps: {
    sx: (theme) => ({
      "& tr:nth-of-type(odd) > td": {
        backgroundColor: darken(BASE_BACKGROUND_COLOR, 0.05),
      },
    }),
  },
  muiSearchTextFieldProps: {
    size: SMALL,
    variant: OUTLINED,
  },
  initialState: {
    showColumnFilters: false,
    showGlobalFilter: true,
    pagination: { pageSize: 5 },
  },
  muiTableBodyProps: {
    sx: (theme) => ({
      "& tr:nth-of-type(odd) > td": {
        backgroundColor: darken(BASE_BACKGROUND_COLOR, 0.05),
      },
      "& tr:nth-of-type(odd):hover > td": {
        backgroundColor: darken(BASE_BACKGROUND_COLOR, 0.1),
      },
      "& tr:nth-of-type(even) > td": {
        backgroundColor: lighten(BASE_BACKGROUND_COLOR, 1),
      },
      "& tr:nth-of-type(even):hover > td": {
        backgroundColor: darken(BASE_BACKGROUND_COLOR, 0.1),
      },
    }),
  },
  mrtTheme: (theme) => ({
    BASE_BACKGROUND_COLOR,
  }),
};

export { tableProps };
