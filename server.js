import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("New Landing Page");
});

app.get("/about", (req, res) => {
  res.send("New About Page");
});

app.get("/contribute", (req, res) => {
  res.send("New Contribution Page");
});

app.get("/join", (req, res) => {
  res.send("New Signup Page");
});
// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
