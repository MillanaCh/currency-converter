import React, { useState } from "react";
import { useContext } from "react";
import { ContextComponent } from "../context/CurrencyContext";
import { Icon } from "react-icons-kit";
import { caretUp } from "react-icons-kit/fa/caretUp";
import { caretDown } from "react-icons-kit/fa/caretDown";
import { arrowSwap } from "react-icons-kit/ionicons/arrowSwap";

export default function MainPageCharts() {
  const { allKeys } = useContext(ContextComponent);
  const [data, setData] = useState([
    { first: "USD", second: "EUR" },
    { first: "GBP", second: "EUR" },
    { first: "USD", second: "JPY" },
    { first: "GBP", second: "USD" },
    { first: "USD", second: "KGS" },
    { first: "USD", second: "KZT" },
  ]);

  console.log(allKeys);

  // Up method
  let difference;

  function checkBetween(el) {
    let value = (
      (allKeys[el.first]?.Value / allKeys[el.second]?.Value) *
      allKeys[el.second]?.Nominal
    ).toFixed(2);
    let prev = (
      (allKeys[el.first]?.Previous / allKeys[el.second]?.Previous) *
      allKeys[el.second]?.Nominal
    ).toFixed(2);
    difference = (prev - value).toFixed(2);
    return difference;
  }
  const handleClick = (index) => {
    let firstObj = data[index]?.first;
    const newData = [...data];
    newData[index] = { first: data[index]?.second, second: firstObj };
    setData(newData);
  };

  return (
    <main className="chartPageMain">
      <h3 style={{ color: "#0a146d", textAlign: "center" }}>
        Popular conversions
      </h3>
      <table className="charts-table">
        <thead>
          <tr>
            <th>From</th>
            <th></th>
            <th>To</th>
            <th>Rate</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el, index) => (
            <tr>
              <td>1 {el.first}</td>
              <td style={{ border: "none" }}>
                <div
                  style={{
                    color: "#0a146d",
                    marginLeft: "20px",
                    textAlign: "center",
                  }}
                  onClick={() => handleClick(index)}
                >
                  <Icon size={30} icon={arrowSwap} />
                </div>
              </td>
              <td>1 {el.second}</td>
              <td>{checkBetween(el)}</td>
              <td>
                {difference >= 0 ? (
                  <h3 style={{ color: "#3f893c", marginLeft: "20px" }}>
                    <Icon size={30} icon={caretUp} />
                  </h3>
                ) : (
                  <h3 style={{ color: "#ea4729", marginLeft: "20px" }}>
                    <Icon size={30} icon={caretDown} />
                  </h3>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
