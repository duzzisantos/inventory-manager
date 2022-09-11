const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Warehouse = new Schema({
    officer: String,
    category: String,
    product: String,
    batchNumber: Number,
    batchUnits: Number,
    productImage: String,
    date: String
},
{
    timestamps: true
}
)

module.exports = mongoose.model("sales", Warehouse)