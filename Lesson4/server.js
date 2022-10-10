const http = require('http')

const port = 3000
const hostName = '127.0.0.1'
const server = http.createServer((req, res) => {
    res.writeHead(202, {'Content-Type': 'text/html'})
    res.write("<h1>HELLO...I am your first server</h1>")
    res.end()
})


server.listen(port, hostName, () => {
    console.log(`server is running successfully at http://${hostName}:${port}`);
})
