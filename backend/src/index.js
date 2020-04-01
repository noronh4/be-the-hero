const express = require('express'); // ver sobre a biblioteca 'express'
const routes = require("./routes") // "./" pra informar que e um arquivo, nao um pacote
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);


