const minimist = require('minimist');

const parse = arr => {
  const obj = minimist(arr);
  delete obj._;

  const flags = Object.entries(obj);
  const flag = flags[0];
  const type = flag[0];
  const payload = flag[1];
    
  return {
    type,
    payload
  };
};

class Input {
  constructor(arr){
    const action = parse(arr);
    this.type = action.type;
    this.payload = action.payload;
  }

  static valid(arr) {
    const action = parse(arr);
    return action.type === 'add' && action.payload; 
  }
}

module.exports = Input;

