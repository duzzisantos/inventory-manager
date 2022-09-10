import { createConnection } from "mysql";
import { HOST, USER, PASSWORD, DB } from "../config";

const connection = createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DB,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Connected to database successfully.");
});

export default connection;
