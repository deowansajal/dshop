const mongoose = require('mongoose')
const commonSchema = require('../utils/common/commonSchema')

const VariantSchema = new mongoose.Schema({
    name: commonSchema(),
    options: {
        color: commonSchema(),
        size: commonSchema(),
    },
    quantity: commonSchema({ type: Number }),
    images: [commonSchema()],
    pricing: {
        regular_price: commonSchema({ type: Number }),
        special_price: commonSchema({ type: Number, required: false }),
    },

    sku: commonSchema(),
})

module.exports = VariantSchema
