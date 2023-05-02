const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const chefData = require('./data/chefData.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World again 2!')
})

app.get('/chefData', (req, res) => {
    res.send(chefData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} again and again`)
})