const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    const text = fs.createReadStream(path.join(__dirname, '.', 'textfolder', 'largeText.txt'), "utf-8")
    text.on("open", () => text.pipe())
    text.on("error", (error) => res.end(error))
})

server.listen(5500, () => console.log("Server running on port 5500..."))