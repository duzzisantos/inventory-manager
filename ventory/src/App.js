import "./App.css";
import Navbar from "./component/navbar";
import Warehouse from "./warehouse";
import Create from "./create";
import Sales from "./sales";
import Shelf from "./shelf";
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Warehouse/>}/>
        <Route path="/warehouse" element={<Warehouse/>}/>
        <Route path="/shelf" element={<Shelf/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/sales" element={<Sales/>}/>
      </Routes>
    </div>
  );
}

export default App;
