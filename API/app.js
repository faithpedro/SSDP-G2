const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

// Express app init
const app = express()

// Init bodyParser -> Request body parsing middleware
const urlencodedParser = bodyParser.urlencoded({
  extended: true
})
app.use(urlencodedParser)
app.use(bodyParser.json())
//

app.use(morgan('dev'))
app.use(cors())

// Router imports
const staffRouter = require('./routes/staffRoutes')
app.use('/api/staff', staffRouter)

module.exports = app
