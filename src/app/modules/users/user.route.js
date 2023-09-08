const express = require('express');
const { getAllUser } = require('./user.controller');
const router = express.Router();

router
  .route("/")

  .get(getAllUser)

  .post((req, res) => {
    res.json({ status: "Post Ok" });
  })


 module.exports = router;
