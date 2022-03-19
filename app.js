const http = require('http')
const router= require('./routes')


const server = http.createServer((req, res) => {
   router
})
server.listen(3000)