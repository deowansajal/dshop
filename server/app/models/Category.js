const mongoose = require('mongoose')
const commonSchema = require('../utils/common/commonSchema')

const CategorySchema = new mongoose.Schema({
    category: commonSchema(),
    subcategories: [{ name: commonSchema(), value: commonSchema() }],
})

module.exports = mongoose.model('Category', CategorySchema)
