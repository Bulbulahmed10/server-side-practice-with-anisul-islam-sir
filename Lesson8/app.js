const express = require("express");
const app = express();
const userRouter = require("./routes/users.route")

app.use(userRouter)

app.use("/", (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html")
})

app.use((req, res) => {
    res.send("<h1> 404 !!! Not a valid url</h1> ")
})




















// app.get("/about", (req, res) => {
//     res.send("I am a get request at about route")
// })

// app.post("/", (req, res) => {
//     res.send("I am a post request at home route")
// })

// app.put("/", (req, res) => {
//     res.send("I am a put request at home route")
// })
// app.delete("/", (req, res) => {
//     res.send("I am a delete request at home route")
// })










module.exports = app