const { readFile, writeFile } = require('fs')
const path = require('path')

console.log("started Task")
readFile(
  path.resolve(__dirname, './contents/first.txt'),
  'utf-8',
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const firstTXTContent = result;
    readFile(
      path.resolve(__dirname, './contents/subfolder/second.txt'),
      'utf-8',
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        const secondTXTContent = result;

        writeFile(
          path.resolve(__dirname, './contents/subfolder/createdAsync.txt'),
          `\nCreated content Asynchronously:\n${firstTXTContent}\n${secondTXTContent}`,
          (err, result) => {
            if (err) {
              console.log(err)
              return
            }
            console.log(result)
          }
        )
        console.log("done with the task");
      }
    )
  },
)
console.log("starting the next Task")
