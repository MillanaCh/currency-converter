import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPageCharts from "./components/Charts";
import Convert from "./components/Convert";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainPageCharts />}></Route>
          <Route path="convert" element={<Convert />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
