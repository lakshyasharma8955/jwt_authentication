const mongoose = require("mongoose");

const DB =
  "mongodb+srv://lakshyasharma9928:lakshyasharma9928@users.nrt4wzb.mongodb.net/jkmasalaToken";
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DataBase Connected"))
  .catch((errr) => {
    console.log(errr);
  });
