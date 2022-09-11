const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const Sales = new Schema()

module.exports = mongoose.model("sale", Sales)