
const { Notes } = require('./Notes');

describe('note functions', () => {
 
  it('executes on an action', () => {
    const action = {
      type: 'add',
      payload: 'My Note'
    };

    const note = Notes.execute(action);

    expect(note).toEqual({
      id: expect.any(Number),
      text: 'My Note'
    });
  });
});
