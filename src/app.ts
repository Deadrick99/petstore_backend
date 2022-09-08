import express from "express";
const app = express();

const PORT = 3000;

// Tell express to parse request body as json
app.use(express.json());

// Routes
app.get("/api/test", (req, res) => {
  res.send({ test: "success" });
});

app.post("/api/test", (req, res) => {
  const body = req.body;
  res.send({ received: body });
});

// Listen on port
app.listen(PORT, () => console.log(`Server starting on port ${PORT} ...`));
