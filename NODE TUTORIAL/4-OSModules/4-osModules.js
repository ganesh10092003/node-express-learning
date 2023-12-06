const os = require('os');


//* info about currUser
const user = os.userInfo();
console.log(user);


//* system uptime in seconds
console.log(`System uptime is ${os.uptime()}`);


//*info about OS
const currOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currOS);