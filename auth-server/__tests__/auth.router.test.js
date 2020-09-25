'use strict'

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../server');
const request = supergoose(server.app);

//Via Davee

describe('Post to /signup should work', () => {
  it('Should create a new user', async() => {
    let newEntry = {
      username: 'diane',
      password: 'diane',
      role: 'admin',
    };
    let response = await request.post('/signup').send(newEntry);
    expect(response.status).toEqual(200);
  })
});

