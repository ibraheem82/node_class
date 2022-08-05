const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url === '/') {
        // ! Writing to the header.
        res.writeHead(200, {'Content-Type' :  'text/html'})
        // res.end('<h1>Home page</h1>')
    }
})

// 
// ! when you it deploy it, it is not always going to run on port [9000], it is going to to run on whatever our host is going to decide for which is going to be in environment variable.
// ! if the env is not found it is going to run it on port [8000]
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));