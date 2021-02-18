const { app } = require('../app.js');
const { fruits } = require('../data.js');
const supertest = require('supertest');
const request = supertest(app);

it('should respond with all fruits', async done => {
    const expectation = { results: fruits };

    const response = await request.get('/fruits');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectation);
    done();
});

it('should respond with the fruit that has the matching id', async done => {
    const expectation = {
        results: {
            id: 4,
            name: `Passion Fruit`,
            image: `Passion-fruit.png`,
            flavor: `Passion fruit have a fragrantly sweet taste with a pleasantly tart tang and are very juicy. What to akin it to? I don’t know. Let’s see. Maybe kiwi. Maybe pineapple.`,
            color: `purple to yellow kin- with golden flesh and dark seeds.`,
            price: 8.00,
            grownIn: `Malaysia, United States and Kenya`,
    
        }
    };

    const response = await request.get('/fruit/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectation);
    done();
});