const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

console.log("started Task")
const firstTXTContent = readFileSync(path.resolve(__dirname, './contents/first.txt'), 'utf-8')
const secondTXTContent = readFileSync(path.resolve(__dirname, './contents/subfolder/second.txt'), 'utf-8')

writeFileSync(
  path.resolve(__dirname, './contents/subfolder/createdFile.txt'),
  `\nContent is :\n${firstTXTContent}\n${secondTXTContent}`,
  { flag: 'a' }
);
console.log("done with the curr Task");

console.log("starting next task");
// console.log(firstTXTContent);
// console.log(secondTXTContent);

