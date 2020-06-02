
describe('note functions', () => {

    it('adds a note', () => {
        const action = {
            type: 'add',
            payload: 'My Note'
        }

        const note = add(action);

        expect(note).toEqual({
            id: expect.any(Number),
            text: 'My Note'
        })
    })

    it('addsd a note and console.logs', () => {
        console.log = jest.fn()

        const actino = {
            type: 'add',
            payload: 'My Note'
        }

        const note = add(action);
        expect(console.log).toHaveBeenCalledTimes(1)
    })

    it('executes on an action', () => {
        const action = {
            type: 'add',
            payload: 'My Note'
        }

        const note = execute(action);

        expect(note).toEqual({
            id: expect.any(Number),
            text: 'My Note'
        })
    })
})