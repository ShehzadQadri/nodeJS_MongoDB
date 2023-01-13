const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/userhit', require('./userFolder'))

app.use('/', (req, res) => { res.send(new Date()); });
app.listen(PORT, () => { console.log("Server Running... ") })
