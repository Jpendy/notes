const minimist = require('minimist')
const { parse, valid } = require('./lib/input')
const { execute } = require('./lib/notes')





console.log(parse(process.argv))

const action = parse(process.argv);
const isValid = valid(action);

if(isValid) execute(action);
else console.log('bad command')