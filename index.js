const minimist = require('minimist')
const { Notes } = require('./lib/Notes')
const Input = require('./lib/Input')


const input = new Input(minimist(process.argv));

const notes = Notes.execute(input);

console.log(notes)
