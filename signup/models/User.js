var mongoose = require("mongoose");
//const db_main = new Schema({ db: String });
const userSchema = mongoose.Schema({
  First_name: {
    type: String,
    required: true,
  },
  Last_name: {
    type: String,
    required: true,
  },
  emailid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // database: {
  //   db_sec:
  // },
});

module.exports = test = mongoose.model("UserSchema", userSchema);
