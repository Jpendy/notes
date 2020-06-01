const minimist = require('minimist')

// const skipTwo = (arr, n) => {
//     return arr.slice(n);
// }

// const isFlag = (str) => {
//     return str.startsWith('--')
// }

// const getFlagValue = (arr, index) => {
//     return arr[index + 1]
// }

// const isValidFlag = flag => {
//     return flag === '--add' || flag === '-a' 
//     ? true
//     : 'invalid flag';
// }

// const parse = (flag, str) => {
//     return str  
//     ? {
//         type: flag,
//         payload: str
//     }
//     : 'invalid input'
// }

const parse = arr => {
    const obj = minimist(arr);
    delete obj._;

    const flags = Object.entries(obj);
    const flag = flags[0]
    const type = flag[0]
    const payload = flag[1]
    // const [[type, payload]] = Object.entries(obj);

    return {
        type,
        payload
    };
}

const valid = action => {
   return action.type === 'add' && action.payload    
}

module.exports = {
     parse, valid
};
