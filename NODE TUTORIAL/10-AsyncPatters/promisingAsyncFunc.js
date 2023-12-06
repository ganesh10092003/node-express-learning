const { log } = require('console')
const { readFile, writeFile } = require('fs').promises //? Automatically Promisifies the Methods

//* util module has method "promisify" which converts the async method to a promise returning function
// const util = require('util')

// const promisifiedReadFile = util.promisify(readFile);
// const promisifiedWriteFile = util.promisify(writeFile);

//? We Promisify the function so as to easily call the Asynchronous code  
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       else {
//         resolve(data)
//       }
//     })
//   })
// }

// getText('./contents/first.txt')
//   .catch((err) => log(err))
//   .then((result) => log(result))

//* we use Async Await to make the promise call Asynchronously
const start = async () => {
  try {
    const first = await readFile('./contents/first.txt', 'utf-8') //* call this and make this wait untill all calls are done
    const second = await readFile('./contents/subfolder/second.txt', 'utf-8')
    await writeFile('./contents/subfolder/createdAsyncAwait.txt', `This is written text:\n${first}\n${second}`)
    log(first + "\n" + second);
  } catch (error) {
    log(error)
  }
}
start()

