import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.grey[300],
    },
    error: {
      main: colors.red[600],
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(255,255,255,0.00)",
            backgroundColor: colors.red[400],
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: colors.grey[300],
            borderRadius: "5px",
          },
        },
      },
    },
  },
});

export default theme;
