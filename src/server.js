const app = require("./app");
const port = process.env.PORT | 5000;
const colors = require('colors');



app.listen(port, () => {
  console.log(`Click Fit Server are listening on port ${port}`.yellow.bold);
});
