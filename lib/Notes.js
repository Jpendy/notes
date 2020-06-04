const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

noteSchema.statics.execute = function(action) {

  if(!action.type) return;

  if(action.type === 'add' && action.payload) return this.create({ text: action.payload }); 

  if(action.type === 'list') return this.find(); 

  if(action.type === 'delete') return this.findByIdAndDelete({ _id: action.payload });

  return;
};

module.exports = mongoose.model('Note', noteSchema);
