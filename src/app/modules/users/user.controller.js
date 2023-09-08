const connection = require("../../db");

const getAllUser = async (req, res) => {
  connection.query("select * from users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
};

const postUser = (req, res) => {
  connection.query(
    "INSERT INTO users set ?",
    req.body,
    (err, result, fields) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  );  
};

module.exports = {
  getAllUser,
  postUser,
};
