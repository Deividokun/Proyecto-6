console.log('todo bien')
require('dotenv').config()

const express = require('express')

const { connectDB } = require('./src/config/db')

const animesRouter = require('./src/api/routes/anime')

const creadoresRouter = require('./src/api/routes/BrandCreator')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/v1/creadores', creadoresRouter)

app.use('/api/v1/animes', animesRouter)

app.use('*', (req, res, next) => {
  res.status(404).json('route not found')
})
/// he cambiado el numero del servidor dado que tenia otro servidor levantado con el mismo numero y no he conseguido cerrarlo.
app.listen(3001, () => {
  console.log('Servidor levantado en: http://localhost:3001')
})
