import theme from "../components/Theme/Theme";
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Stack } from "@mui/material";
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <Topbar />
      <Stack direction="row">
        <Sidebar />
        <Component {...pageProps} />
      </Stack>
    </ThemeProvider>
  )
}
