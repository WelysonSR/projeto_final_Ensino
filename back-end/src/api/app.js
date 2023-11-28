const express = require('express')
require('express-async-errors');
const app = express()
const cors = require('cors')
const error = require('../middleware/error')
const user = require('../router/user')
const game = require('../router/game')


app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>res.status(200).json({message:'ok'}))
app.use('/user', user)
app.use('/game', game)

app.use(error) //Próximos códigos acima dessa linha
module.exports = app