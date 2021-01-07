const mongoose = require('mongoose')
const commonSchema = require('../utils/common/commonSchema')
const VariantSchema = require('./Variant')

const ProductSchema = new mongoose.Schema({
    category: {
        ...commonSchema({ type: mongoose.Schema.Types.ObjectId }),
        ref: 'Category',
    },
    name: commonSchema(),
    description: commonSchema(),
    quantity: commonSchema({ type: Number }),
    images: [commonSchema()],

    manufacturing_details: {
        brand: commonSchema(),
        model: commonSchema(),
    },

    pricing: {
        regular_price: commonSchema({ type: Number }),
        special_price: commonSchema({ type: Number, required: false }),
    },
    sku: commonSchema(),
    details: [{ name: commonSchema(), value: commonSchema() }],
    variants: [VariantSchema],
})

module.exports = mongoose.model('Product', ProductSchema)
