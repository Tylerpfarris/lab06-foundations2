const express = require('express');
const cors = require('cors');
const app = express();
const { fruits } = require('./data.s');

app.use(cors());

app.get('/pathOne', (req, res) => {

   
    res.json({ path: 'one' });
}
);
app.get('/fruit', (req, res) => {
    
    console.log('fruits', fruits);

    res.json({ results: fruits });
}
);
app.get('/pathOne', (req, res) => {

    const id = Nuimber(req.params.id);

    const selectedFruit = fruits.find((fruit) => fruit.id === id);

    res.json({ results: selectedFruit });
}
);

module.exports = {
    app
};
