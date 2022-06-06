import "./App.css";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { useEffect, useState } from "react";

function App() {
  const [allData, setAllData] = useState([]);

  const [select1, setSelect1] = useState("EUR");
  const [select2, setSelect2] = useState("USD");
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();

  const [allKeys, setAllKeys] = useState([]);

  const fetchData = async () => {
    try {
      let data = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
      let response = await data.json();
      setAllData(response);
      setAllKeys(response.Valute);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  let valueKeys = Object.keys(allKeys);
  const handleClickConverter = () => {
    setSelect1(select1);
    setSelect2(select1);
    setInput1(input2);
    setInput2(input1);
  };

  function handleInput1Change(input1) {
    setInput2(
      ((input1 * allKeys[select2]?.Value) / allKeys[select1]?.Value).toFixed(2)
    );
    setInput1(input1);
  }

  function handleSelect1Change(select1) {
    setInput2(
      ((input1 * allKeys[select2]?.Value) / allKeys[select1]?.Value).toFixed(2)
    );
    setSelect1(select1);
  }

  function handleInput2Change(input2) {
    setInput1(
      ((input2 * allKeys[select1]?.Value) / allKeys[select2]?.Value).toFixed(2)
    );
    setInput2(input2);
  }

  function handleSelect2Change(select2) {
    setInput1(
      ((input2 * allKeys[select1]?.Value) / allKeys[select2]?.Value).toFixed(2)
    );
    setSelect2(select2);
  }
  return (
    <div className="App">
      <h1 className="header">Currency Converter</h1>
      <div className="container">
        <section className="currency">Millana</section>
        <section className="converter">
          <article className="article">
            <h3 style={{ padding: "0 0 8px 5px" }}>{allKeys[select1]?.Name}</h3>
            <div className="flex-article">
              <select
                value={select1}
                className="select"
                onChange={(e) => handleSelect1Change(e.target.value)}
              >
                {valueKeys.map((el, index) => (
                  <option key={index}>{el}</option>
                ))}
              </select>
              <input
                type="number"
                value={input1}
                className="input"
                onChange={(e) => handleInput1Change(e.target.value)}
              />
            </div>
          </article>
          <button className="btn" onClick={() => handleClickConverter()}>
            <HiOutlineSwitchHorizontal size={40} />
          </button>
          <article className="article">
            <h3 style={{ padding: "0 0 8px 5px" }}>{allKeys[select2]?.Name}</h3>
            <div className="flex-article">
              <select
                value={select2}
                className="select"
                onChange={(e) => handleSelect2Change(e.target.value)}
              >
                {valueKeys.map((el, index) => (
                  <option key={index}>{el}</option>
                ))}
              </select>
              <input
                type="number"
                value={input2}
                className="input"
                onChange={(e) => handleInput2Change(e.target.value)}
              />
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
