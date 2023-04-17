import dotenv from "dotenv";
import express from "express";
import personController from "./backend/controllers/personController.js";
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Helo");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/services", (req, res) => {
  res.send("Services Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});
app.use("/people", personController);

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
