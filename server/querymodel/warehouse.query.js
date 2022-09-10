const sql = require("../models/connection");

class Warehouse {
    constructor(warehouse) {
        this.category = warehouse.category;
        this.product = warehouse.product;
        this.batch_number = warehouse.batch_number;
        this.batch_date = warehouse.date;
        this.officer_name = warehouse.officer_name;
        this.product_image = warehouse.product_image;
        this.batch_amount = warehouse.batch_amount;
    }
    //Create new entry into warehouse table
    static create(newWarehouse, result) {
        sql.query("INSERT INTO warehouse SET ?", newWarehouse, (err, res) => {
            if (err) {
                console.log(err);
                result(err, null);
                return;
            }
            console.log("created warehouse batch: ", {
                ID: res.insertId,
                ...newWarehouse,
            });
            result(null, { id: res.insertId, ...newWarehouse });
        });
    }
    //Find one warehouse row by their ID
    static findById(id, result) {
        sql.query(`SELECT * FROM warehouse WHERE ID = ${id}`, (err, res) => {
            if (err) {
                console.log(err);
                result(err, null);
                return;
            }
            if (res.length) {
                console.log("found warehouse batch: ", res[0]);
                result(null, res[0]);
                return;
            }
            result({ kind: "not_found" }, null);
        });
    }
    // Find all warehouse entries
    static getAll(product, result) {
        let query = "SELECT * FROM warehouse";
        if (product) {
            query += `WHERE product LIKE '%${product}%'`;
        }
        sql.query(query, (err, res) => {
            if (err) {
                console.log(err);
                result(null, err);
                return;
            }
            console.log("warehouse: ", res);
            result(null, res);
        });
    }
    // Update a warehouse entry
    static updateById(id, warehouse, result) {
        sql.query(
            "UPDATE warehouse SET category = ?, product = ?, batch_number = ?, batch_date = ?, officer_name = ?, product_image = ?, batch_amount = ? WHERE id = ?",
            [
                warehouse.category,
                warehouse.product,
                warehouse.batch_number,
                warehouse.batch_date,
                warehouse.officer_name,
                warehouse.product_image,
                warehouse.batch_amount,
                warehouse.id,
            ],
            (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                    return;
                }
                if (res.affectedRows == 0) {
                    result({ kind: "not_found" }, null);
                    return;
                }
                console.log("Updated warehouse entry: ", { id: id, ...warehouse });
            }
        );
    }
    //Delete one warehouse entry by ID
    static removeById(id, result) {
        sql.query("DELETE FROM TABLE warehouse WHERE id = ?", id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("deleted warehouse entry: ", id);
            result(null, res);
        });
    }
    //Delete all warehouse entries
    static remove(result) {
        sql.query("DELETE FROM warehouse", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log(`deleted ${res.affectedRows} warehouse entries`);
            result(null, res);
        });
    }
}

module.exports = Warehouse;
