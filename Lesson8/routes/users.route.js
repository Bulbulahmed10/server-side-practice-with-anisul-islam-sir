const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html")

//   res.status(200).json({
//       message: "I am register page",
//       statusCode: 200
//   })
//   res.redirect("/login")
});

router.get("/login", (req, res) => {
//   res.cookie("name", "bulbul")
//   res.cookie("age", "23")
res.clearCookie("name")
res.clearCookie("age")

res.append("id", "121221212" )
  res.end()
});

module.exports = router;
