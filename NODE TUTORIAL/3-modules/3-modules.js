//! Every File in Node is a MODULE
const names = require('./names');
const func = require('./func');

const data = require('./anotherMethod');
console.log(data);

func('Tejaswi ganesh');
func(names.name1);
func(names.name2);
