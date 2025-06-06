import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import SupplementsTable from "./components/SupplementsTable";
import supplementsData from "../data.json";

const theme = createTheme({
  typography: {
    h5: { fontSize: "1.2rem", fontWeight: 600 },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            px: 4,
            py: 6,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "2.5rem",
              mb: 10,
              background: "linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            Supplement Tracker
          </Typography>

          <Box sx={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
            <Paper elevation={4} sx={{ flex: 1, p: 4 }}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Daily Supplements
              </Typography>
              <SupplementsTable supplements={supplementsData.regular} />
            </Paper>

            <Paper elevation={4} sx={{ flex: 1, p: 4 }}>
              <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
                Occasional Supplements
              </Typography>
              <SupplementsTable supplements={supplementsData.occasional} />
            </Paper>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
