const { log } = require('console')
const { readFile } = require('fs')

log("Started First Task")
readFile('./contents/first.txt', 'utf-8', (err, res) => { //* readFile is Asynchronous
  if (err) {
    log(err)
    return;
  }
  log(res)
  log("First Task Completed")
})
log("second task Started")
