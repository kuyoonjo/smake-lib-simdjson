const { LLVM_Darwin } = require('smake');
const { addLibs } = require('@smake/libs');
const { simdjson } = require('./lib');

class test extends LLVM_Darwin {
  files = ['test.cpp'];
  cxxflags = [
    ...super.cxxflags,
    '-std=c++17',
  ];
}

test = addLibs(test, simdjson);

module.exports = { 
  targets: [test],
};
