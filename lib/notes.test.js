const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const Note = require('./Notes');



const mongodb = new MongoMemoryServer();

describe('Note model', () => {
  beforeAll(() => {
    return mongodb.getUri()
      .then(uri => mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }));
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close()
      .then(() => mongodb.stop());
  });

  it('It will add a Note with execute', () => {
    const action = {
      type: 'add',
      payload: 'hello note'
    };

    return Note.execute(action)
      .then(note => {
        expect(note.toJSON()).toEqual({
          _id: expect.anything(),
          text: expect.any(String),
          __v: 0
        });
      });
  });

  it('It will list all notes with execute', async() => {
    const addAction = {
      type: 'add',
      payload: 'hello note'
    };

    await Note.execute(addAction);

    const action = {
      type: 'list',
    };

    return Note.execute(action)
      .then(note => {
        expect(note.map(item => item.toJSON())).toEqual([{
          _id: expect.anything(),
          text: expect.any(String),
          __v: 0
        }]);
      });
  });
});
