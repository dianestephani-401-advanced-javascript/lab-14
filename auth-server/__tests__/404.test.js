'use strict'

//via Davee
const supergoose = require('@code-fellows/supergoose');
const server = require('../server');
const request = supergoose(server.app);

describe('It should log a 404 for a route not present', ()=> {
  it ('Should give a 404 for a bad route', async() => {
    let response = await request.get('/bad');
    expect(response.status).toEqual(404);
  });
});