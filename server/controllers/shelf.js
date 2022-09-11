const Shelf = require("../models/shelf").default;
const Warehouse = require("../models/warehouse")

//Create 

module.addNewShelfItem = (req, res) => {
    if(!req.body){
        console.error("There must be a body")
    }

    const shelf = new Shelf()
    
}