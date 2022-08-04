const http = require('http');


http.createServer((req, res) => {
    // Write response
    res.write('ibraheem omikunle');
    res.end()
}).listen(3000, () => console.log('Server running...'));