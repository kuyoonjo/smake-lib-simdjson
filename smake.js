const { LLVM } = require('smake');
const { LibSimdjson } = require('./lib');

const simdjson = new LibSimdjson('x86_64-linux-gnu');
const test = new LLVM('test', 'x86_64-linux-gnu');
test.files = ['test.cpp'];
LibSimdjson.config(test);

module.exports = [simdjson, test];
