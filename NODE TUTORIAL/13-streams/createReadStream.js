//* We want to read a Large File,
const { log } = require('console')
const { createReadStream } = require('fs')

//* highWaterMark Object Controls the size of each chunk of data
const stream = createReadStream('./contents/subfolder/createBigFile.txt', { highWaterMark: 90000, encoding: 'utf-8' })

//* This method does not do the complete event of reading the data at a time but instead 
//? Does that in CHUNKS of data
stream.on('data', (chunk) => {
  // log(chunk)
  log(chunk.length); //* By default the chunk data will be of 64kBytes of data
})
stream.on('error', (err) => {
  log(err);
})


//* usually it is read and the value is stored in a variable
//* but bigger the file gets, the variable cant stored that big file

// const { readFile } = require('fs').promises

// const start = async () => {
//   try {
//     const bigFile = await readFile('./contents/subfolder/createBigFile.txt', 'utf-8') //* bigFile variable takes a large space
//     console.log(bigFile);
//   } catch (error) {
//     console.log(error)
//   }
// }
// start();

