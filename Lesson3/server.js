const http = require('http')

const port = 3000
const hostName = '127.0.0.1'
const server = http.createServer((req, res) => {

    res.end("HELLO...I am your first server")
})


server.listen(port, hostName, () => {
    console.log(`server is running successfully at http://${hostName}:${port}`);
})
