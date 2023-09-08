const express = require('express');
const { getAllUser, postUser } = require('./user.controller');
const router = express.Router();

router
  .route("/")

  .get(getAllUser)

  .post(postUser)


 module.exports = router;