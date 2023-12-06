//? If We want to read a file and display it on a Server

const http = require('http')
const { createReadStream } = require('fs');

http
  .createServer((req, res) => {
    const stream = createReadStream('./contents/subfolder/createBigFile.txt', { encoding: 'utf-8', highWaterMark: 5000 });
    stream.on('open', (chunks) => {
      //? This writes (server can send it) in chunks,
      //* we cant just use res.end() which only takes one chunk
      stream.pipe(res)
    })
    stream.on('error', (error) => {
      res.end(error)
    })
  })
  .listen(5000)

//!This variable 'bigFile' takes us a lot of space and sends it to the server which has to carry this bigFile of data to the frontend
// const { readFile } = require('fs').promises
// http
//   .createServer((req, res) => {
//     const start = async () => {
//       const bigFile = await readFile('./contents/subfolder/createBigFile.txt', 'utf-8')
//       res.end(bigFile)
//     }
//     start();
//   })
//   .listen(5000)