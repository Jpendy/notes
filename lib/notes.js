const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});


noteSchema.statics.execute = function(action) {
  const note = action.payload;    
  const noteId = noteSchema._id;

  if(!action.type) return;

  if(action.type === 'add' && action.payload) return this.create({ text: note });
    
  if(action.type === 'list') return this.find();
    
  if(action.type === 'delete') return this.findByIdAndDelete({ noteId });

  return;   
};



// const add = action => {
//     const note = {
//         id: Date.now(),
//         text: action.payload
//     }
//     console.log(note)
//     return note
// }

// class Notes{
//     static execute = action => {
//         if(!action.type) return
//         if(action.type === 'add') return add(action);
//  }
// }

module.exports = mongoose.model('Note', noteSchema);
