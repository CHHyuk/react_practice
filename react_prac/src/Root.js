import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import App from "./App";

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
        <App />
      </ThemeProvider>
    );
  }