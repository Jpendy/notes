const Note = require('./lib/Notes');
const Input = require('./lib/Input');
const express = require('express');
const app = express();
const mongoose = require('mongoose');


const input = new Input(process.argv);
Input.valid(input) && Note.execute(input);


mongoose.connect('mongodb://localhost:27017/notes', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

app.post('/notes', (req, res) => {
  Note
    .create(req.body)
    .then(note => res.send(note));
});

app.get('/notes', (req, res) => {
  Note
    .find()
    .then(note => res.send(note));
});

// app.listen(3000, () => {
//   console.log('Started on 3000');
// });
