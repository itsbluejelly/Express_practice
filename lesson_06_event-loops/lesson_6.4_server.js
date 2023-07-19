const http = require('http')

const server = http.createServer((req, res) => {
    console.log("Request event")
    res.end("Hello World")
})

server.listen(5500, () => console.log("Server listening to port 5500..."))