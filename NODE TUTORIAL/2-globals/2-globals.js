//? GLOBAL VARIABLES

//* __dirname - directory name (along with path)
//* __filename - file name (along with path)
//* require - all the functions that we use the modules (CommonJS)
//* module -info about curr module (i.e. file)
//! process - info about the environment where the node programm is executed

setInterval(() => {
  console.log(__filename);
}, 1000)