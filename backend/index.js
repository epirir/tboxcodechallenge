const express = require("express");
const colors = require("colors");
const tboxRouter = require("./routes/tbox.route");

const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.json({ message: "API is running successfully" });
});

app.use("/", tboxRouter);

app.listen(PORT, () =>
  console.log(`Server started on PORT ${PORT}`.yellow.bold)
);
