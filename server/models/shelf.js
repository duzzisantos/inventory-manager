const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const Shelf = new Schema();

module.exports = mongoose.model("shelf", Shelf);
