const express = require("express")
const app = express()
const bodyParser = require("body-parser")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//! area route page

app.get("/area", (req, res) => {
    res.sendFile(__dirname + "/views/area.html")
})

app.post("/area", (req, res) => {
    const height = req.body.height
    const width = req.body.width
    const area = 0.5 * height * width
    res.send(`<h2>Area of triangle: ${area} </h2> `)
})

//! circle route page

app.get("/circle", (req, res) => {
    res.sendFile(__dirname + "/views/circle.html")
})

app.post("/circle", (req, res) => {
    const radius = req.body.circle
    const area = Math.PI * radius * radius
    res.send(`<h2>Area of Circle is: ${area} </h2>`)
})

//! home route page
app.get("/", (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html")
})

//! error route page

app.get("*",(req, res) => {
    res.statusCode = 404;
    res.send("<h1>404, Page Not Found</h1>")
}) 


module.exports = app