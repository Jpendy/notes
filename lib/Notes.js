
const add = action => {
    const note = {
        id: Date.now(),
        text: action.payload
    }
    console.log(note)
    return note
}

class Notes{
    static execute = action => {
        if(!action.type) return
        if(action.type === 'add') return add(action);
 }
}

module.exports = {
     Notes
}
