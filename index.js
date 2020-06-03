const Note = require('./lib/Notes')
const Input = require('./lib/Input')
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/note')


const input = new Input(process.argv);
Input.valid && Notes.execute(input);



app.listen(3000, () => {
    console.log('Started on 3000');
});