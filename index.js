const { Notes } = require('./lib/Notes')
const Input = require('./lib/Input')


const input = new Input(process.argv);
Input.valid(input) && Notes.execute(input);
