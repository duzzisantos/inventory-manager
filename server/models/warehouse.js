const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Warehouse = new Schema(
  {
    officer: String,
    category: String,
    product: String,
    batchNumber: Number,
    batchUnits: Number,
    productImage: String,
    date: String,
  }
);

module.exports = mongoose.model("warehouse", Warehouse);
