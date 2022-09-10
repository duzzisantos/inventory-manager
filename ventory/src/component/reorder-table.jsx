import React from "react";
import Table from "react-bootstrap/Table";

const ReorderTable = () => {
  return (
    <Table striped="columns" style={{ margin: "0px", border: '1px solid #d3cfcf', borderStyle: "dotted", width: "100%" }}>
      <thead>
        <tr>
          <th>Product name</th>
          <th>Image</th>
          <th>Demand</th>
          <th>Reorder</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bacon</td>
          <td>
            {" "}
            <img
              alt="product"
              src="https://media.istockphoto.com/photos/raw-smoked-bacon-isolated-streaky-brisket-slices-picture-id1320642441?k=20&m=1320642441&s=612x612&w=0&h=FFRxvEJMXbyjiI6ldtuFBTykjsfpKsEPT2NcSuRVLFs="
            />
          </td>
          <td>High</td>
          <td>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ReorderTable;
