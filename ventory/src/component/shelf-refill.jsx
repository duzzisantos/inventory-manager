import React from "react";
import Table from "react-bootstrap/esm/Table";
const ShelfRefill = () => {
  return (
    <div className="dashboard">
         <div className="reorder">
         <h5>Suggestions for refill</h5>
         </div>
      <form className="shelf-form">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Refill</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>Dairy</td>
              <td>
                <select className="select-product">
                    <option value="milk" name="milk">Milk</option>
                    <option value="cheese" name="cheese">Cheese</option>
                    <option value="butter" name="butter">Butter</option>
                    <option value="yoghurt" name="yoghurt">Yoghurt</option>
                    <option value="cream" name="cream">Cream</option>
                </select>
              </td>
              <td>
                <select className="select-amount">
                    <option value={1} name="one-carton">One carton</option>
                    <option value={2} name="one-carton">Two cartons</option>
                    <option value={3} name="one-carton">Three cartons</option>
                    <option value={4} name="one-carton">Four cartons</option>
                </select>
              </td>
              <td>
                {" "}
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>

            <tr>
              <td>Beverages</td>
              <td>
                <select className="select-product">
                    <option value="beer" name="beer">Beer</option>
                    <option value="soda" name="soda">Soda</option>
                    <option value="malt" name="malt">Malt</option>
                    <option value="juice" name="juice">Juice</option>
                    <option value="cocoa" name="cocoa">Cocoa</option>
                </select>
              </td>
              <td>
                <select className="select-amount">
                    <option value={1} name="one-carton">One carton</option>
                    <option value={2} name="one-carton">Two cartons</option>
                    <option value={3} name="one-carton">Three cartons</option>
                    <option value={4} name="one-carton">Four cartons</option>
                </select>
              </td>
              <td>
                {" "}
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>

            <tr>
              <td>Toileteries</td>
              <td>
                <select className="select-product">
                    <option value="pads" name="pads">Pads</option>
                    <option value="tissue" name="tissue">Tissue</option>
                    <option value="soap" name="soap">Soap</option>
                    <option value="shampoo" name="shampoo">Shampoo</option>
                    <option value="deodorant" name="deodorant">Deodorant</option>
                </select>
              </td>
              <td>
                <select className="select-amount">
                    <option value={1} name="one-carton">One carton</option>
                    <option value={2} name="one-carton">Two cartons</option>
                    <option value={3} name="one-carton">Three cartons</option>
                    <option value={4} name="one-carton">Four cartons</option>
                </select>
              </td>
              <td>
                {" "}
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>

            <tr>
              <td>Meat</td>
              <td>
                <select className="select-product">
                    <option value="chicken" name="chicken">Chicken</option>
                    <option value="beef" name="beef">Beef</option>
                    <option value="bacon" name="bacon">Bacon</option>
                    <option value="lamb" name="lamb">Lamb</option>
                    <option value="fish" name="fish">Fish</option>
                </select>
              </td>
              <td>
                <select className="select-amount">
                    <option value={1} name="one-carton">One carton</option>
                    <option value={2} name="one-carton">Two cartons</option>
                    <option value={3} name="one-carton">Three cartons</option>
                    <option value={4} name="one-carton">Four cartons</option>
                </select>
              </td>
              <td>
                {" "}
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>

          </tbody>
        </Table>
      </form>
    </div>
  );
};

export default ShelfRefill;
