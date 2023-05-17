import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import App from "./App";
import { RecoilRoot } from "recoil";

export default function Root() {
    const theme = createTheme({
      typography: {
        fontFamily: ["GmarketSansMedium"],
      },
      palette: {
        primary: {
          main: "#a09eff",
          contrastText: "#ffffff",
        },
      },
    });
  
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </ThemeProvider>
    );
  }