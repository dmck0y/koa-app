require('dotenv').config()

exports.get = key => process.env[key];
