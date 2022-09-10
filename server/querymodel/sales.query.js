const sql = require("../models/connection");


class Sales {
    constructor(sales) {
        this.category = sales.category;
        this.product = sales.product;
        this.batch_number = sales.batch_number;
        this.batch_date = sales.date;
        this.officer_name = sales.officer_name;
        this.product_image = sales.product_image;
        this.batch_amount = sales.batch_amount;
    }
    //Create new entry into sales table
    static create(newsales, result) {
        sql.query("INSERT INTO sales SET ?", newsales, (err, res) => {
            if (err) {
                console.log(err);
                result(err, null);
                return;
            }
            console.log("created sales batch: ", {
                ID: res.insertId,
                ...newsales,
            });
            result(null, { id: res.insertId, ...newsales });
        });
    }
    //Find one sales row by their ID
    static findById(id, result) {
        sql.query(`SELECT * FROM sales WHERE ID = ${id}`, (err, res) => {
            if (err) {
                console.log(err);
                result(err, null);
                return;
            }
            if (res.length) {
                console.log("found sales batch: ", res[0]);
                result(null, res[0]);
                return;
            }
            result({ kind: "not_found" }, null);
        });
    }
    // Find all sales entries
    static getAll(product, result) {
        let query = "SELECT * FROM sales";
        if (product) {
            query += `WHERE product LIKE '%${product}%'`;
        }
        sql.query(query, (err, res) => {
            if (err) {
                console.log(err);
                result(null, err);
                return;
            }
            console.log("sales: ", res);
            result(null, res);
        });
    }
    // Update a sales entry
    static updateById(id, sales, result) {
        sql.query(
            "UPDATE sales SET category = ?, product = ?, batch_number = ?, batch_date = ?, officer_name = ?, product_image = ?, batch_amount = ? WHERE id = ?",
            [
                sales.category,
                sales.product,
                sales.batch_number,
                sales.batch_date,
                sales.officer_name,
                sales.product_image,
                sales.batch_amount,
                sales.id,
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
                console.log("Updated sales entry: ", { id: id, ...sales });
            }
        );
    }
    //Delete one sales entry by ID
    static removeById(id, result) {
        sql.query("DELETE FROM TABLE sales WHERE id = ?", id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("deleted sales entry: ", id);
            result(null, res);
        });
    }
    //Delete all sales entries
    static remove(result) {
        sql.query("DELETE FROM sales", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log(`deleted ${res.affectedRows} sales entries`);
            result(null, res);
        });
    }
}







module.exports = Sales;
