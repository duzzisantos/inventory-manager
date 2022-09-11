const dbConfiguration = require("../config")
const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const database = {}
database.mongoose = mongoose
database.url = dbConfiguration.url
database.warehouse = require("../models/warehouse")
database.shelf = require("../models/shelf")
database.sales = require("../models/sales")

module.exports = database