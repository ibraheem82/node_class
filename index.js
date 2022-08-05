const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  //   if (req.url === '/') {
  //     fs.readFile(
  //       path.join(__dirname, '/public', 'index.html'),
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
  //       path.join(__dirname, '/public', 'about.html'),
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

  // * Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // ! it is going to show any path that is sent
  //   console.log(filePath);
  //   res.end();

  // * Get the extension of  the file that is been loaded
  let extname = path.extname(filePath);

  // * Initial content type

  let contentType = "text/html";

  // * Checking the extension and setting the content type.
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;

    case ".css":
      contentType = "text/css";
      break;

    case ".json":
      contentType = "application/json";
      break;

    case ".png":
      contentType = "image/png";
      break;

    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // * Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // * Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // * Show some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // * Success response
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

// ! when you it deploy it, it is not always going to run on port [9000], it is going to to run on whatever our host is going to decide for which is going to be in environment variable.
// ! if the env is not found it is going to run it on port [8000]
const PORT = process.env.PORT || 4989;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const person = require('./person');
// const Person = require('./person');

// const person1 = new Person('John Doe', 30);

// person1.greeting();

// console.log(person.name);

// const Logger = require('./logger.js');
// const logger =  new Logger();
// logger.on('message', data => console.log('Called Listener', data));

// * Calling the log() method
// logger.log('Ibraheem Omikunle');
// logger.log('Ibrahe');
// logger.log('mikunle');
// logger.log('Ibrmikunle');
