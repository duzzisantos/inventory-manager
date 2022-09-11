const Warehouse = require("../models/warehouse");

//Create

exports.createWarehouseData = (req, res) => {
  if (!req.body.id) {
    console.log("Make sure to fill in every data!");
  }

  const warehouse = new Warehouse({
    officer: req.body.officer,
    category: req.body.category,
    product: req.body.product,
    batchNumber: req.body.batchNumber,
    batchUnits: req.body.batchUnits,
    productImage: req.body.productImage,
    date: req.body.date,
  });

  warehouse
    .save(warehouse)
    .then((item) => {
      console.log(item);
    })
    .catch((error) => {
      console.log(error);
    });
};

//Find all

exports.findAllWarehouseData = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};
  Warehouse.find(condition)
    .then((items) => {
      console.log(items.statusText);
    })
    .catch((error) => {
      console.log(error.statusText);
    });
};

//Find one

exports.findOneWarehouseData = (req, res) => {
  const id = req.params._id;
  Warehouse.findById(id)
    .then((item) => {
      res.status(200);
      console.log(item);
    })
    .catch((error) => {
      console.log(error, res.status(500));
    });
};

//Update

exports.updateWarehouseData = (req, res) => {
  const id = req.params._id;
  Warehouse.findByIdAndUpdate(id, { $set: req.body }, (err, data, next) => {
    if (err) {
      console.log(res.status(500));
    } else {
      console.log(res.status(200), ": Updated one warehouse data");
    }
  });
};

//Delete one
exports.removeOneWarehouseData = (req, res) => {
  const id = req.params.id;
  Warehouse.findByIdAndRemove(id)
    .then((item) => {
      if (!item) {
        console.log(res.status(403), ": Forbidden request");
      } else {
        console.log(res.status(200),": Deleted one warehouse data");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

//Delete many
exports.removeAllWarehouseData = (req, res) => {
    Warehouse.deleteMany({})
    .then(item => {
        console.log(res.status(200), ": Deleted all warehouse data")
        console.log(item)
    })
    .catch(error => {
        console.log(res.status(403), ": Forbidden request")
        console.log(error)
    })
}