module.exports = (app) => {
  const warehouse = require("../controllers/warehouse.controllers");
  var router = require("express").Router();

  router.post("/", warehouse.createWarehouseData);
  router.get("/", warehouse.findAllWarehouseData);
  router.get("/:id", warehouse.findOneWarehouseData);
  router.put("/:id", warehouse.updateWarehouseData);
  router.delete("/:id", warehouse.removeOneWarehouseData);
  router.delete("/", warehouse.removeAllWarehouseData);
  app.use("/api/warehouse", router);
};
