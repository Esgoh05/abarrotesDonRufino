require('dotenv').config()
const express = require('express')

//se importan las rutas
const productRoutes = require('./routes/productRoutes')

const app = express()

/* Middlewares */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* Rutas */
app.use('/api/v1', productRoutes)

app.listen(3000, () => {
    console.log('SERVER ON: 3000')
  })
  