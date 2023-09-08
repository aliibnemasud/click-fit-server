const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const userRouter = require("./app/modules/users/user.route.js");
const fileRoutes = require("./app/modules/files/files.route");

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.use("/file", fileRoutes);

//  This is using to make upload images folder public accessible
app.use("/images", express.static(path.join(__dirname, "..", "upload_images")));

app.get("/", (req, res) => {
  res.send("Click Fit Server is running....");
});

app.get("*", (req, res) => {
  res.send("No Routes Found!");
});

module.exports = app;
