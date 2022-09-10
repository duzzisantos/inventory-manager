import React from "react";
import Container from "./component/container";
import Dashboard4 from "./component/dashboard4";
import Dashboard5 from "./component/dashboard5";
import "./App.css";
import Status from "./component/status";

const Sales = () => {
  return (
    <>
      <Container>
        <Status>
          <Dashboard4></Dashboard4>
          <Dashboard5></Dashboard5>
        </Status>
      </Container>
    </>
  );
};

export default Sales;
