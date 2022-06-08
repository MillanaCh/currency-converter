import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPageCharts from "./components/MainPageCharts";
import Currency from "./components/Currency";
import Convert from "./components/Convert";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainPageCharts />}></Route>
          <Route path="convert" element={<Convert />}></Route>
          <Route path="currency" element={<Currency />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
