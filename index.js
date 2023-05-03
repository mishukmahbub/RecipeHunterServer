const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const chefData = require('./data/chefData.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('chefData server is running!')
})

app.get('/chefData', (req, res) => {
    res.send(chefData)
})

app.get('/chefData/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chef = chefData.find(c => c._id === id)
    res.send(chef)
})

app.listen(port, () => {
    console.log(`chefData server is listening on port ${port}`)
})