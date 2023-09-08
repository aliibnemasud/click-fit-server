const express = require("express");
const { uploadImages } = require("./files.controller");
const uploader = require("../../uploader");
const router = express.Router();

router
  .route("/")

  .post(uploader.single("image"), uploadImages);

module.exports =  router;
