const { log } = require("console")

log("Started Task1")
setInterval(() => { //* setInterval is also Asynchronous
  log("Executing Task 1.....")
}, 2000)
//? Process stays alice untill Kill Process is done (i.e. Ctrl+C)
log("Started Task2");