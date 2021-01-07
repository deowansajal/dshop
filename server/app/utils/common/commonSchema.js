module.exports = ({ type = String, required = true } = {}) => ({
    type,
    required,
    trim: true,
})
