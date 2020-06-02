


const add = action => {
    const note = {
        id: Date.now(),
        text: action.payload
    }

    console.log(`Note added: ${note.text}`);

    return note
}

const execute = action => {
    if(!action.type) return
    if(action.type === 'add') return add(action);

    // if(action.type === 'add'){
    //     return add(action)
    // } else {
    //     return {
    //         error: 'invalid input'
    //     }
    // }
}

module.exports = {
    add, execute
}