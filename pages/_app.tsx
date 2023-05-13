import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import theme from "../components/Theme/Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Layout />
        <Stack sx={{ mt: "64px" }}>
          <Component {...pageProps} />
        </Stack>
      </>
    </ThemeProvider>
  );
}
