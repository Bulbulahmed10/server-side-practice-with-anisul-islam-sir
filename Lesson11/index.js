const express = require("express");
const app = express();
const PORT = 3002;


const myMiddleWare = (req, res, next) => {

    req.currentTime = new Date(Date.now())
    next()
}

app.use(myMiddleWare)

app.use((req, res, next) => {
    res.send("404 bad url request")
})

app.get("/",(req, res) => {
    console.log("i am home. " + req.currentTime);
  res.send("<h1>I am home route</h1>");
});

app.get("/about",(req, res) => {
    console.log("i am about. " + req.currentTime);
  res.send("<h1>I am about route</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is successfully running at  http://localhost:${PORT}`);
});
