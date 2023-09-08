const app = require("./app");
const port = process.env.PORT | 5000;
const colors = require("colors");
const connection = require("./app/db");

const dbConnection = () => {
  connection.connect((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`My Sql Database Connected!!`.red.bold);
    }
  });
};

app.listen(port, () => {
  console.log(`Click Fit Server are listening on port ${port}`.yellow.bold);
  dbConnection();
});
