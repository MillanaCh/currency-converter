import "./App.css";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { useEffect, useState } from "react";

function App() {
  const [allData, setAllData] = useState([]);

  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const fetchData = async () => {
    try {
      let data = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
      let response = await data.json();
      setAllData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClickConverter = () => {
    console.log("i am click");
  };

  let arr = [];
  for (let key in allData.Valute) {
    arr.push(allData.Valute[key]);
  }

  return (
    <div className="App">
      <h1 className="header">Currency Converter</h1>
      <div className="container">
        <section className="currency">Top Part</section>
        <section className="converter">
          <article className="article">
            <select
              className="select"
              onChange={(e) => setSelect1(e.target.value)}
            >
              {arr.map((el, index) => (
                <option key={index}>{el.CharCode}</option>
              ))}
            </select>
            <input
              value={input1}
              className="input"
              onChange={(e) => setInput1(e.target.value)}
            />
          </article>
          <button className="btn" onClick={() => handleClickConverter()}>
            <HiOutlineSwitchHorizontal size={40} />
          </button>
          <article className="article">
            <select
              className="select"
              onChange={(e) => setSelect2(e.target.value)}
            >
              {arr.map((el, index) => (
                <option key={index}>{el.CharCode}</option>
              ))}
            </select>
            <input
              value={input2}
              className="input"
              onChange={(e) => setInput2(e.target.value)}
            />
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
