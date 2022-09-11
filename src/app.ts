import express from "express";
const app = express();

// Import routes
import { AnimalsRouter } from "./routes/animals.routes";

// Tell express to parse request body as json
app.use(express.json());

// Routes
app.get("/api", (req, res) => {
  res.json({ success: true, up: true });
});

app.use("/api/animals/", AnimalsRouter);

// Start on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server starting on port ${PORT} ...`));
