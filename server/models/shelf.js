const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Shelf = new Schema({
    category: String,
    product: String,
    batchNumber: Number,
    batchUnits: Number,
    productImage: String,
})

module.exports = mongoose.model("shelf", Shelf)