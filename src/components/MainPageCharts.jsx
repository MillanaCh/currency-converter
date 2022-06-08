import React from "react";
import { useEffect, useState } from "react";
import { Icon } from "react-icons-kit";
import { top } from "react-icons-kit/iconic/top";
import { bottom } from "react-icons-kit/iconic/bottom";
import { thickRight } from "react-icons-kit/iconic/thickRight";
import { ic_autorenew } from "react-icons-kit/md/ic_autorenew";
import Select from "react-select";

export default function MainPageCharts() {
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

  const valueKeys = Object.keys(allKeys);
  let currencyType = valueKeys.map((el) => ({ label: el, value: el }));

  const handleClickConverter = () => {
    setSelect1(select2);
    setSelect2(select1);
    setInput1(input2);
    setInput2(input1);
  };
  function handleInput1Change(input1) {
    setInput2(
      (
        (((input1 * allKeys[select1]?.Value) / allKeys[select2]?.Value) *
          allKeys[select2]?.Nominal) /
        allKeys[select1]?.Nominal
      ).toFixed(2)
    );
    setInput1(input1);
  }

  function handleSelect1Change(select1) {
    setInput2(
      (
        (((input1 * allKeys[select1]?.Value) / allKeys[select2]?.Value) *
          allKeys[select2]?.Nominal) /
        allKeys[select1]?.Nominal
      ).toFixed(2)
    );
    setSelect1(select1);
  }

  function handleInput2Change(input2) {
    setInput1(
      (
        (((input2 * allKeys[select2]?.Value) / allKeys[select1]?.Value) *
          allKeys[select2]?.Nominal) /
        allKeys[select1]?.Nominal
      ).toFixed(2)
    );
    setInput2(input2);
  }

  function handleSelect2Change(select2) {
    setInput2(
      (
        (((input1 * allKeys[select2]?.Value) / allKeys[select1]?.Value) *
          allKeys[select2]?.Nominal) /
        allKeys[select1]?.Nominal
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

  return (
    <div className="mainPageCharts">
      <section className="currency">
        <table className="table">
          <tr style={{ width: "300px" }}>
            <th>From</th>
            <th></th>
            <th>To</th>
            <th></th>
          </tr>
          <tr>
            <td>
              1 {select1} ({allKeys[select1]?.Name})
            </td>
            <div
              style={{
                color: "#0018c6",
                margin: "0 20px 0 20px",
                textAlign: "center",
              }}
            >
              <Icon size={35} icon={thickRight} />
            </div>
            <td>
              {topFunction} {select2} ({allKeys[select2]?.Name})
            </td>
            <div>
              {difference >= 0 ? (
                <h3 style={{ color: "#3f893c", marginLeft: "20px" }}>
                  <Icon size={30} icon={top} />
                  {difference}
                </h3>
              ) : (
                <h3 style={{ color: "#ea4729", marginLeft: "20px" }}>
                  <Icon size={30} icon={bottom} />
                  {difference}
                </h3>
              )}
            </div>
          </tr>
        </table>
      </section>
      <section className="converter">
        <article className="article">
          <h3 style={{ padding: "0 0 8px 5px", color: "#035b8c" }}>
            {allKeys[select1]?.Name}
          </h3>
          <div className="flex-article">
            <Select
              value={{ value: select1, label: select1 }}
              options={currencyType}
              className="select"
              onChange={(opt) => handleSelect1Change(opt.label)}
            />
            <input
              type="number"
              value={input1}
              className="input"
              onChange={(e) => handleInput1Change(e.target.value)}
            />
          </div>
        </article>
        <button className="btn" onClick={() => handleClickConverter()}>
          <div style={{ color: "#0018c6" }}>
            <Icon size={50} icon={ic_autorenew} />
          </div>
        </button>
        <article className="article">
          <h3 style={{ padding: "0 0 8px 5px", color: "#035b8c" }}>
            {allKeys[select2]?.Name}
          </h3>
          <div className="flex-article">
            <Select
              value={{ value: select1, label: select2 }}
              options={currencyType}
              className="select"
              onChange={(opt) => handleSelect2Change(opt.label)}
            />
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
  );
}
