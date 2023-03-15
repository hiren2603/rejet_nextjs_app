import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";


const theme = createTheme({
    palette : {
        primary : {
            main : colors.grey[300],
        },
        error : {
            main : colors.red[600],
        },
    },
})

export default theme;