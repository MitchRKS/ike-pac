import express from "express";
const personRouter = express.Router();

personRouter.get("/about", (req, res) => {
  res.send("New About Page");
});
personRouter.get("/contribute", (req, res) => {
  res.send("New Contribution Page");
});
personRouter.get("/join", (req, res) => {
  res.send("New Signup Page");
});

export default personRouter;
