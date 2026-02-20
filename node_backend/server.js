const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("Hello from Express Server");
});

app.use("/api", userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
