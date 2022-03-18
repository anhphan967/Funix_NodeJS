const fs = require('fs');
//fs.writeFileSync('hello.txt', 'Hello from node.js');

// create node_server
const http = require('http')



const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method;
    //change request

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>My first page </title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>submitd</button></input></form></body>')
        res.write('</html>')
        return res.end()
    }
    // change request 2
    if (url === '/message' && method === "POST") {
        fs.writeFileSync('message.txt', 'dummy');
        req.statusCode = 302
        req.setHeader('Location', '/')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first page </title></head>')
    res.write('<body><h1>Hello from my nodejs server</h1></body>')
    res.write('</html>')
    res.end()
})
server.listen(3000)
