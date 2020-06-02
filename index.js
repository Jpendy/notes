const minimist = require('minimist')
const { parse, valid } = require('./lib/input')
const { execute } = require('./lib/notes')





console.log(parse(process.argv))