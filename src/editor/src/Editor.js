import {
  Box,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import LexicalEditorWrapper from "./components/LexicalEditorWrapper";
import theme from "./theme";
import "./App.css";

function Editor() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        sx={{ minHeight: "100vh" }}
        flexDirection="column"
        alignItems="center"
      >
        {/* 950 */}
        <Grid item sx={{ width: 1350, overflow: "hidden" }}>
          <LexicalEditorWrapper />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Editor;
