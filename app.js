// package we use in our application 

const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
require('dotenv').config()
require('./helpers/init_mongodb')
const { verifyAccessToken } = require('./helpers/jwt_helper')
const cors = require('cors')
// require('./helpers/init_redis')

const AuthRoute = require('./routes/auth.route')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());

// app.get('/', verifyAccessToken, async (req, res, next) => {
//     res.send('Hello from express.')
//   })

app.use('/auth', AuthRoute)

// 
// error message if route not found 

// app.use(async (req,res,next) => {
//     // const error = new Error ("not found")
//     // error.status = 404
//     // next(error)
//     next(createError.NotFound())
// })

// app.use(async (err,req,res,next) => {
//     res.status(err.status || 500)
//     res.send({
//         error:{
//         status: err.status || 500,
//         message: err.message,
//     }
//     })
// })

// 

// making connection to the port

// const PORT = process.env.PORT || 3000

app.listen(8080, () => {
  console.log(`server running on port 8080`)
})

// 