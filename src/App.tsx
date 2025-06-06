import { CssBaseline, Typography, Paper, Box } from "@mui/material";
import SupplementsTable from "./components/SupplementsTable";
import supplements from "../data.json";

function App() {
  return (
    <>
      {/* TODO: remove baseline */}
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          background:
            "linear-gradient(180deg,rgb(243, 234, 234) 0%,rgb(243, 234, 234) 100%)",
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
              background: "black",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              textShadow: "0 0 1px rgb(57, 57, 57)",
            }}
          >
            Supplement Tracker
          </Typography>
          <Box sx={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
            <Paper elevation={4} sx={{ flex: 1, p: 4 }}>
              <Typography
                variant="h5"
                sx={{ mb: 3, fontSize: "1.2rem", fontWeight: 600 }}
              >
                Daily
              </Typography>
              <SupplementsTable supplements={supplements.regular} />
            </Paper>
            <Paper elevation={4} sx={{ flex: 1, p: 4 }}>
              <Typography
                variant="h5"
                sx={{ mb: 3, fontSize: "1.2rem", fontWeight: 600 }}
              >
                Occasional
              </Typography>
              <SupplementsTable supplements={supplements.occasional} />
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
