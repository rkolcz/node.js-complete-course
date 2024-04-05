const fs = require('fs');
const http = require('http');

///////<------FILE------>/////////

//Blocking, synchronous way
// const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about advocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./1-node-farm/starter/txt/input.txt', textOut);
// console.log('File written!');

//non-bloking, asynchronius way
// fs.readFile('./1-node-farm/starter/txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('ERROR! BOM')

//     fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2)
//         fs.readFile(`./1-node-farm/starter/txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./1-node-farm/starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log("Your file has been written")
//             });
//         });
//     });
// });
// console.log('Will read file!');


///////<------SERVER------>/////////

const server = http.createServer((req, res) => {
    res.end('Hej tam z servera!');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000');
})

// console.log(serever)