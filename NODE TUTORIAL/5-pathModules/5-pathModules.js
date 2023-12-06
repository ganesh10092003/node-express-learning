const path = require('path')

console.log(path.sep)

const filePath = path.join('/parentFolder', 'childFolder', 'testChild.txt')
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(__dirname, 'parentFolder', 'childFolder', 'testChild.txt');
console.log(absolutePath);

