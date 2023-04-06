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

app.use("/people", personController);

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
