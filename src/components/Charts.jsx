import React, { useEffect, useState, useContext } from "react";
import { ContextComponent } from "../context/CurrencyContext";
import { Icon } from "react-icons-kit";
import { caretUp } from "react-icons-kit/fa/caretUp";
import { caretDown } from "react-icons-kit/fa/caretDown";
import { arrowSwap } from "react-icons-kit/ionicons/arrowSwap";

export default function MainPageCharts() {
  const { obj } = useContext(ContextComponent);

  const [data, setData] = useState();

  useEffect(() => {
    setData(obj);
  }, [obj]);

  const handleClick = (index) => {
    const newData = [...data];
    let fromObj = newData[index]?.from;
    newData[index] = {
      from: newData[index]?.to,
      to: fromObj,
      previous: newData[index]?.Previous,
      value: (1 / newData[index]?.value).toFixed(4),
      diff: (1 / newData[index]?.previous - 1 / obj[index]?.value).toFixed(4),
    };
    console.log(newData[index]?.previous);
    setData(newData);
  };

  // console.log(data);

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
            <tr key={index}>
              <td className="nameOfCurrency">1 {el.from}</td>
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
              <td className="valueOfCurrency">
                {el?.value} {el?.to}
              </td>
              <td className="valueOfCurrency">{el?.diff}</td>
              <td>
                {el?.value >= 0 ? (
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
