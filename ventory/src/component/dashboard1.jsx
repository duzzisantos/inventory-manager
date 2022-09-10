import React from "react";
import ChartHolder from "./chart-holder";
const Dashboard1 = () => {
  return (
    <div className="dashboard">
      <div className="utility-wrapper">
        <div className="select-wrapper">
          <select>
            <option value="beverages" name="beverages">
              Beverages
            </option>
            <option value="dairy" name="dairy">
              Dairy
            </option>
            <option value="meat" name="meat">
              Meat
            </option>
            <option value="toileteries" name="toileteries">
              Toileteries
            </option>
          </select>
        </div>
        <div className="display-key">
          <div className="colors">
            <div id="key-color-low"></div>
            <div id="key-color-medium"></div>
            <div id="key-color-high"></div>
          </div>
          <div className="captions">
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
          </div>
        </div>
      </div>
   <ChartHolder></ChartHolder>
    </div>
  );
};

export default Dashboard1;
