const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const uploader = require("./app/uploader");
const path = require("path");

app.use(cors());
app.use(express.json());

app.post("/fileUpload", uploader.single("file"), async (req, res)=> {

    try {
        res.status(200).json(req.file)        
    } catch (error) {
        console.log(error);
    }
});

//  This is using to make upload images folder public accessible

app.use('/static', express.static(path.join(__dirname, '..', 'upload_images')));


app.get("/", (req, res) => {
  res.send("Click Fit Server is running....");
});

app.get("*", (req, res) => {
  res.send("No Routes Found!");
});

module.exports = app;
