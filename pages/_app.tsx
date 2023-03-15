import theme from "../components/Theme/Theme";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Topbar from '@/components/Topbar'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={theme}>
      <Topbar />
      <Sidebar />
      <Component {...pageProps} />

    </ThemeProvider>
  ) 
}
