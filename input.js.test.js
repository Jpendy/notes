const { skipTwo, isFlag, getFlagValue, isValidFlag, parse, valid } = require('./lib/input')

const minimist = require('minimist')

describe('parses input', () => {
  it('parses command line arguments', () => {
    const arr = ['node', 'index.js', '--add', 'hello this is now added'];
    
    const result = parse(arr, 2)
    expect(result).toEqual({
      type: 'add',
      payload: 'hello this is now added'
    });
  });

  it('can validate command line arguments', () => {
    const action = {
      type: 'add',
      payload: 'hello this is now added'
    }

    const isValid = valid(action)

    expect(isValid).toBeTruthy();
  })
});



// describe('skips items in an array', () => {
//     it('takes an array and a number, and skips all items before that number', () => {
//       const arr = [1, 2, 3, 4];
      
//       const result = skipTwo(arr, 2)
//       expect(result).toEqual([3, 4]);
//     });
//   });


//   describe('checks string for flag and returns true or false', () => {
//     it('takes in a string, and validates whether it is a flag or not', () => {
//       const str = '--add';
      
//       const result = isFlag(str)
//       expect(result).toEqual(true);
//     });
//   });

//   describe('returns value of string after the flag', () => {
//     it('takes in an array and an index, and returns the value of the item one spot after the given index', () => {
//       const arr = ['node', 'index.js', '--add', 'hello'];
      
//       const result = getFlagValue(arr, 2)
//       expect(result).toEqual('hello');
//     });
//   });


//   describe('checks if flag is valid input', () => {
//     it('takes in a ', () => {
//       const arr = ['node', 'index.js', '--add', 'hello'];
      
//       const result = getFlagValue(arr, 2)
//       expect(result).toEqual('hello');
//     });
//   });

  
    

