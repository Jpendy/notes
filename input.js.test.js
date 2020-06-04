const  Input  = require('./lib/Input');

describe('parses input', () => {

  it('parses command line arguments', () => {
    const arr = ['node', 'index.js', '--add', 'hello this is now added'];
    
    const input = new Input(arr);

    expect(input.type).toEqual('add');
    expect(input.payload).toEqual('hello this is now added');
  });
  
  it('validates correct input', () => {
    const arr = ['node', 'index.js', '--add', 'note'];
    const isValid = Input.valid(arr);
    expect(isValid).toBeTruthy();
  });
});
