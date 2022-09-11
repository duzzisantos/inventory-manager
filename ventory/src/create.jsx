import React, { useState } from "react";
import Container from "./component/container";

const Create = () => {
  const [inventory, setInventory] = useState({
    officer: "",
    category: "",
    product: "",
    batchNumber: 0,
    batchUnits: 0,
    productImage: "",
    date: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/warehouse", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inventory),
      });
      console.log(response.statusText);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <form className="new-inventory" onSubmit={handleSubmit}>
        <h3>Register new inventory</h3>
        <span>All fields are required. ***</span>
        <label htmlFor="officer">Inventory officer name</label>
        <input
          type="text"
          id="officer"
          name="officer"
          onChange={(e) =>
            setInventory({ ...inventory, officer: e.target.value })
          }
          value={inventory.officer}
        ></input>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          onChange={(e) =>
            setInventory({ ...inventory, category: e.target.value })
          }
          value={inventory.category}
        >
          <option name="beverages">Beverages</option>
          <option name="dairy">Dairy</option>
          <option name="meat">Meat</option>
          <option name="toileteries">Toileteries</option>
        </select>
        <label htmlFor="product">Product</label>
        <select
          id="product"
          onChange={(e) =>
            setInventory({ ...inventory, product: e.target.value })
          }
          value={inventory.product}
        >
          <option name="beverages" disabled>
            -- Beverages --
          </option>
          <option name="beverages">Pepsi</option>
          <option name="beverages">Coke</option>
          <option name="beverages">Fanta</option>
          <option name="beverages">Beer</option>
          <option name="beverages">Malt drink</option>
          <option name="beverages" disabled>
            -- Dairy --
          </option>
          <option name="dairy">Cream</option>
          <option name="dairy">Milk</option>
          <option name="dairy">Butter</option>
          <option name="dairy">Cheese</option>
          <option name="dairy">Yoghurt</option>
          <option name="meat" disabled>
            -- Meat --
          </option>
          <option name="meat">Pork</option>
          <option name="meat">Beef</option>
          <option name="meat">Fish</option>
          <option name="meat">Lamb</option>
          <option name="meat">Chicken</option>
          <option name="meat">Duck</option>
          <option name="toileteries" disabled>
            -- Toileteries --
          </option>
          <option name="toileteries">Tissue paper</option>
          <option name="toileteries">Shampoo</option>
          <option name="toileteries">Deodorant</option>
          <option name="toileteries">Hand soap</option>
          <option name="toileteries">Toilet cleaner</option>
          <option name="toileteries">Toothpaste</option>
          <option name="toileteries">Detergent</option>
        </select>
        <label htmlFor="batch-number">Batch number</label>
        <input
          type="number"
          id="batch-number"
          name="batchNumber"
          onChange={(e) =>
            setInventory({ ...inventory, batchNumber: e.target.value })
          }
          value={inventory.batchNumber}
        ></input>
        <label htmlFor="batch-units">Batch units</label>
        <input
          type="number"
          id="batch-units"
          name="batchUnits"
          onChange={(e) =>
            setInventory({ ...inventory, batchUnits: e.target.value })
          }
          value={inventory.batchUnits}
        ></input>
        <label htmlFor="product-image">Product image</label>
        <input
          type="text"
          id="product-image"
          name="productImage"
          onChange={(e) =>
            setInventory({ ...inventory, productImage: e.target.value })
          }
          value={inventory.productImage}
        />
        <label htmlFor="date-time">Entry date</label>
        <input
          type="date"
          id="date-time"
          name="date"
          onChange={(e) => setInventory({ ...inventory, date: e.target.value })}
          value={inventory.date}
        />
        <button type="submit" id="submit-btn">
          Submit
        </button>
      </form>
    </Container>
  );
};

export default Create;
