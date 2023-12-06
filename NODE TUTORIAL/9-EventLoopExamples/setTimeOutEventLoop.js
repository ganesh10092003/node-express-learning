const { log } = require("console");

log("Started First Task")
setTimeout(() => { //*SetTimeOut is also Asynchronous
  log("Executing Task 1....")
  log("Completed First Task")
}, 0)

log("Started 2nd Task")