import React from 'react'
import Container from "./component/container";
import BigNumbers from "./component/big-numbers";
import Category from "./component/category";
import Status from "./component/status";
import Dashboard1 from "./component/dashboard1";
import ShelfRefill from './component/shelf-refill';

const Shelf = () => {
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
      <ShelfRefill/>
    </Status>
  </Container>
  )
}

export default Shelf