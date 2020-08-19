var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
var User = require("./models/User");
var db = require("./mysetup/myurl").myurl;
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
// var bcrypt = require("bcrypt");
// var saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error is", err.message);
  });

app.get("/", (req, res) => {
  res.status(200).send("SIGNUP HOMEPAGE");
});

app.post("/signup", async (req, res) => {
  var newUser = new User({
    First_name: req.body.First_name,
    Last_name: req.body.Last_name,
    emailid: req.body.emailid,
    password: req.body.password,
  });

  // await newUser
  //   .save()
  //   .then(() => {
  //     res.status(200).send(newUser);
  //   })
  //   .catch((err) => {
  //     console.log("Error is ", err.message);
  //   });
  await User.findOne({ emailid: newUser.emailid })
    .then(async (profile) => {
      if (!profile) {
        await newUser
          .save()
          .then(() => {
            res.status(200).send(newUser);
          })
          .catch((err) => {
            console.log("Error is ", err.message);
          });
      } else {
        res.send("User already exists...");
      }
    })
    .catch((err) => {
      console.log("Error is", err.message);
    });
});

//   await User.findOne({ First_name: newUser.First_name })
//     .then(async (profile) => {
//       if (!profile) {
//         bcrypt.hash(newUser.password, saltRounds, async (err, hash) => {
//           if (err) {
//             console.log("Error is", err.message);
//           } else {
//             newUser.password = hash;
//             await newUser
//               .save()
//               .then(() => {
//                 res.status(200).send(newUser);
//               })
//               .catch((err) => {
//                 console.log("Error is ", err.message);
//               });
//           }
//         });
//       } else {
//         res.send("User already exists...");
//       }
//     })
//     .catch((err) => {
//       console.log("Error is", err.message);
//     });
// });

app.listen(port, () => {
  console.log("Server is listening on port" + port);
});
