const express = require('express');
const cors = require('cors');
const app = express();
const { fruits } = require('./data.js');

app.use(cors());

app.get('/pathOne', (req, res) => {

   
    res.json({ path: 'one' });
}
);
app.get('/fruits', (req, res) => {
    
    console.log('fruits', fruits);

    res.json({ results: fruits });
}
);
app.get('/fruit/:id', (req, res) => {

    const id = Number(req.params.id);

    const selectedFruit = fruits.find((fruit) => fruit.id === id);

    res.json({ results: selectedFruit });
}
);

module.exports = {
    app
};
