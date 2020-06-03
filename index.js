const Note = require('./lib/Notes');
// const Input = require('./lib/Input');
const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/notes', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

// const input = new Input(process.argv);
// Input.valid && Notes.execute(input);


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


app.listen(3000, () => {
  console.log('Started on 3000');
});
