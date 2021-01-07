const path = require('path')
require('dotenv').config({ path: path.join(__dirname, 'config', '.env') })

const config = require('./config/config')

config.connectDB()
