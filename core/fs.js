const fs    = require('fs');
const path  = require('path');

// * Create folder, will a folder.
// fs.mkdir(path.join(__dirname, '/ibraheem'), {}, (err) => {
//     if(err) throw err;
//     console.log('Folder created...');
// })

// * Create and write to file.
// fs.mkdir(path.join(__dirname, '/ibraheem'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created...');
// });

// ! if you already have something in that file when you create another one, it replace the old one, so use [append]
// * File append
// fs.writeFile(path.join(__dirname, '/ibraheem', 'ibraheem.txt'), 'My name is ibraheem omikunle', err => {
//     if(err) throw err;
//     console.log('File was written to...');
//     fs.appendFile(path.join(__dirname, '/ibraheem', 'ibraheem.txt'), ' I love writting codes', err => {
//         if(err) throw err;
//         console.log('File was written to...');
//     });

// });

// * Read file
// fs.readFile(path.join(__dirname, '/ibraheem', 'ibraheem.txt'), 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });







// *  Renaming a file
// * second parameter is going be path and file you want to rename it with
fs.rename(path.join(__dirname, '/ibraheem', 'ibraheem.txt'), path.join(__dirname, '/ibraheem', 'omikunle.txt'), (err) => {
    if(err) throw err;
    console.log('File renamed...');
});