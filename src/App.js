import "./App.css";
import { useEffect, useState } from "react";
import { Icon } from "react-icons-kit";
import { top } from "react-icons-kit/iconic/top";
import { bottom } from "react-icons-kit/iconic/bottom";
import { thickRight } from "react-icons-kit/iconic/thickRight";
import { ic_autorenew } from "react-icons-kit/md/ic_autorenew";
function App() {
  const [allData, setAllData] = useState([]);

  const [select1, setSelect1] = useState("EUR");
  const [select2, setSelect2] = useState("USD");
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);

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
    setSelect1(select2);
    setSelect2(select1);
    setInput1(input2);
    setInput2(input1);
  };

  function handleInput1Change(input1) {
    setInput2(
      (
        ((input1 * allKeys[select1]?.Value) / allKeys[select2]?.Value) *
        allKeys[select2]?.Nominal
      ).toFixed(2)
    );
    setInput1(input1);
  }

  function handleSelect1Change(select1) {
    setInput2(
      (
        ((input1 * allKeys[select1]?.Value) / allKeys[select2]?.Value) *
        allKeys[select2]?.Nominal
      ).toFixed(2)
    );
    setSelect1(select1);
  }

  function handleInput2Change(input2) {
    setInput1(
      (
        ((input2 * allKeys[select2]?.Value) / allKeys[select1]?.Value) *
        allKeys[select2]?.Nominal
      ).toFixed(2)
    );

    setInput2(input2);
  }

  function handleSelect2Change(select2) {
    setInput2(
      (
        ((input1 * allKeys[select2]?.Value) / allKeys[select1]?.Value) *
        allKeys[select2]?.Nominal
      ).toFixed(2)
    );
    setSelect2(select2);
  }

  let topFunction = (
    (allKeys[select1]?.Value / allKeys[select2]?.Value) *
    allKeys[select2]?.Nominal
  ).toFixed(2);

  let difference;
  function checkPrevious() {
    let currency = (
      (allKeys[select1]?.Previous / allKeys[select2]?.Previous) *
      allKeys[select2]?.Nominal
    ).toFixed(2);
    difference = (currency - topFunction).toFixed(2);
  }
  checkPrevious();
  // console.log(difference);
  // console.log(allKeys[select1]);
  // console.log(allKeys[select2]);

  return (
    <div className="App">
      <h1 className="header">Currency Converter</h1>
      <div className="container">
        <section className="currency">
          <h3>1 {select1}</h3>
          <div style={{ color: "white", margin: "0 20px 0 20px" }}>
            <Icon size={35} icon={thickRight} />
          </div>
          <h3>
            {topFunction} {select2}
          </h3>
          <h3 style={{ margin: "0 50px 0 120px" }}>
            {difference >= 0 ? (
              <div style={{ color: "#3f893c" }}>
                <Icon size={25} icon={top} /> {difference}
              </div>
            ) : (
              <div style={{ color: "#ea4729" }}>
                <Icon size={25} icon={bottom} /> {difference}
              </div>
            )}
          </h3>
        </section>
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
            <div style={{ color: "rgb(127, 156, 184)" }}>
              <Icon size={50} icon={ic_autorenew} />
            </div>
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
