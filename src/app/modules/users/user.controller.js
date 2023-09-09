const connection = require("../../db");

const getAllUser = async (req, res) => {
  try {
    connection.query("select * from users", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const postUser = (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

const updateUser = (req, res) => {
  try {
    const id = req.params.id;
    const sql = `UPDATE users SET ? WHERE id= ?`;
    const updatedData = req.body;
    if (id && updatedData) {
      connection.query(sql, [updatedData, id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
    } else {
      res.json("Please Provide Id and Data!");
    }
  } catch (error) {
    console.log(error);
  }
};

const getSingleUser = (req, res) => {
  try {
    const id = req.params.id;
    const sql = `SELECT * FROM users WHERE id=${id}`;
    connection.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = (req, res) => {
  try {
    const id = req.params.id;
    if (id) {    
      const sql = `DELETE FROM users WHERE id=${id}`;
      connection.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUser,
  postUser,
  getSingleUser,
  updateUser,
  deleteUser
};
