const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req.url);
//   if (req.url === '/') {
//     fs.readFile(
//       path.join(__dirname, '../public', 'index.html'),
//       (err, content) => {
        // * Checking for the error
//         if (err) throw err;
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(content);
//       }
//     );
//   }


//   if (req.url === '/about') {
//     fs.readFile(
//       path.join(__dirname, '../public', 'about.html'),
//       (err, content) => {
        // * Checking for the error
//         if (err) throw err;
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(content);
//       }
//     );
//   }

// * Assuming our data is api

// if (req.url === '/api/users') {
//         const users = [
//             {name: 'Ibraheem Omikunle', age:40},
//             {name: 'John  Brad', age:17},
//             {name: 'Ibraheem Fatiu', age:20}
//         ];
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(users));
//   }

});

// ! when you it deploy it, it is not always going to run on port [9000], it is going to to run on whatever our host is going to decide for which is going to be in environment variable.
// ! if the env is not found it is going to run it on port [8000]
const PORT = process.env.PORT || 4989;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
