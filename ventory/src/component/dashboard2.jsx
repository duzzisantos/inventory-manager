import React from "react";
import ReorderTable from "./reorder-table";
const Dashboard2 = () => {
  return (
    <div className="dashboard">
      <div className="reorder">
        <h5>Suggestions for re-order</h5>
      </div>
      <ReorderTable />
    </div>
  );
};

export default Dashboard2;
