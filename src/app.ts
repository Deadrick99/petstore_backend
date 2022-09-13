import express from "express";
import * as dotenv from "dotenv";

// Import routes
import { customerRouter } from "./tables/customer/customer.router";

// Setup port
dotenv.config();
if (!process.env.PORT) process.exit(1);
const PORT = parseInt(process.env.PORT as string, 10);

// Setup Express
const app = express();

// Tell express to parse request body as json
app.use(express.json());

// Routes
app.get("/api", (req, res) => {
  res.json({ success: true, up: true });
});

app.use("/api/customers/", customerRouter);

// Start server
app.listen(PORT, () => console.log(`Server starting on port ${PORT} ...`));
