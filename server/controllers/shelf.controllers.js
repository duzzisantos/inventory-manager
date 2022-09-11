const sql = require("../models/connection");

class Shelf {
    constructor(shelf) {
        this.category = shelf.category;
        this.product = shelf.product;
        this.batch_number = shelf.batch_number;
        this.batch_date = shelf.date;
        this.officer_name = shelf.officer_name;
        this.product_image = shelf.product_image;
        this.batch_amount = shelf.batch_amount;
    }
    //Create new entry into shelf table
    static create(newshelf, result) {
        sql.query("INSERT INTO shelf SET ?", newshelf, (err, res) => {
            if (err) {
                console.log(err);
                result(err, null);
                return;
            }
            console.log("created shelf batch: ", {
                ID: res.insertId,
                ...newshelf,
            });
            result(null, { id: res.insertId, ...newshelf });
        });
    }
    //Find one shelf row by their ID
    static findById(id, result) {
        sql.query(`SELECT * FROM shelf WHERE ID = ${id}`, (err, res) => {
            if (err) {
                console.log(err);
                result(err, null);
                return;
            }
            if (res.length) {
                console.log("found shelf batch: ", res[0]);
                result(null, res[0]);
                return;
            }
            result({ kind: "not_found" }, null);
        });
    }
    // Find all shelf entries
    static getAll(product, result) {
        let query = "SELECT * FROM shelf";
        if (product) {
            query += `WHERE product LIKE '%${product}%'`;
        }
        sql.query(query, (err, res) => {
            if (err) {
                console.log(err);
                result(null, err);
                return;
            }
            console.log("shelf: ", res);
            result(null, res);
        });
    }
    // Update a shelf entry
    static updateById(id, shelf, result) {
        sql.query(
            "UPDATE shelf SET category = ?, product = ?, batch_number = ?, batch_date = ?, officer_name = ?, product_image = ?, batch_amount = ? WHERE id = ?",
            [
                shelf.category,
                shelf.product,
                shelf.batch_number,
                shelf.batch_date,
                shelf.officer_name,
                shelf.product_image,
                shelf.batch_amount,
                shelf.id,
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
                console.log("Updated shelf entry: ", { id: id, ...shelf });
            }
        );
    }
    //Delete one shelf entry by ID
    static removeById(id, result) {
        sql.query("DELETE FROM TABLE shelf WHERE id = ?", id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("deleted shelf entry: ", id);
            result(null, res);
        });
    }
    //Delete all shelf entries
    static remove(result) {
        sql.query("DELETE FROM shelf", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log(`deleted ${res.affectedRows} shelf entries`);
            result(null, res);
        });
    }
}


module.exports = Shelf;
