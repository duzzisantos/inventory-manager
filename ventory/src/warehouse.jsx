import React from "react";
import Container from "./component/container";
import BigNumbers from "./component/big-numbers";
import Category from "./component/category";
import Status from "./component/status";
import Dashboard1 from "./component/dashboard1";
import Dashboard2 from "./component/dashboard2";

const Warehouse = () => {
  return (
    <Container>
      <div className="summary">
        <BigNumbers>
          <Category>Beverages</Category>
          <h5 className="count">175 <span className="left">left</span></h5>
        </BigNumbers>
        <BigNumbers>
          <Category>Dairy</Category>
          <h5 className="count">297 <span className="left">left</span></h5>
        </BigNumbers>
        <BigNumbers>
          <Category>Meat</Category>
          <h5 className="count">292 <span className="left">left</span></h5>
        </BigNumbers>
        <BigNumbers>
          <Category>Toileteries</Category>
          <h5 className="count">309 <span className="left">left</span></h5>
        </BigNumbers>
      </div>
      <Status>
        <Dashboard1/>
        <Dashboard2/>
      </Status>
    </Container>
  );
};

export default Warehouse;
