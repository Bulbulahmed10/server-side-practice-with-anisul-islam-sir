const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser")



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/register" , (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/register", (req, res) => {
  const fullName = req.body.fullName
  const age = req.body.age
  res.send(`<h2>Your name is :${fullName} & age: ${age}  </h2>`)
})










app.get("/", (req, res) => {
  //! request query parameter
  //   const  {id, name} = req.query

  //! request route parameter
  //   const id = req.params.id;
  //   const age = req.params.age;

  //! request header parameter

  const id = req.header("id")
  const name = req.header("name")

  res.send(`<h1>Student id is: ${id} & name is: ${name}</h1> `);
});

app.listen(PORT, () => {
  console.log(`Server running successfully at http://localhost:${PORT}`);
});
