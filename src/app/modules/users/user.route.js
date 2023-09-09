const express = require("express");
const { getAllUser, postUser, updateUser, getSingleUser, deleteUser } = require("./user.controller");
const router = express.Router();

router
  .route("/")
  .get(getAllUser)
  .post(postUser)

router.route("/addUser").post(postUser);
router.route("/updateUser/:id").patch(updateUser)
router.route("/getUser/:id").get(getSingleUser)
router.route("/deleteUser/:id").delete(deleteUser)

module.exports = router;
