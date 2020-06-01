const minimist = require('minimist')
const { parse } = require('./lib/input')

console.log(parse(process.argv))