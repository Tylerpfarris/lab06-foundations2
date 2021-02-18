const { app } = require('./app.js');

const port = 5000

app.listen(port, ( => {
    console.log(`running on http://localhost${port}`)
}))