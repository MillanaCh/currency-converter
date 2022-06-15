import React, { useEffect, useState, useContext } from "react";
import { ContextComponent } from "../context/CurrencyContext";
import { Icon } from "react-icons-kit";
import { caretUp } from "react-icons-kit/fa/caretUp";
import { caretDown } from "react-icons-kit/fa/caretDown";
import { arrowSwap } from "react-icons-kit/ionicons/arrowSwap";
import { debounce } from "lodash";

export default function MainPageCharts() {
  const { obj } = useContext(ContextComponent);

  const [searched, setSearched] = useState([]);
  const [lengthSearch, setLengthSearch] = useState(0);

  const [data, setData] = useState();

  useEffect(() => {
    setData(obj);
  }, [obj]);

  const handleClick = (id) => {
    const newData = [...data];
    const indexOf = newData.findIndex((elem) => {
      return elem.ID === id;
    });
    let fromObj = newData[indexOf]?.from;

    newData[indexOf] = {
      from: newData[indexOf]?.to,
      to: fromObj,
      previous: 1 / newData[indexOf]?.previous,
      value: (1 / newData[indexOf]?.value).toFixed(4),
      diff: (
        1 / newData[indexOf]?.previous -
        1 / newData[indexOf]?.value
      ).toFixed(4),
      ID: newData[indexOf]?.ID,
    };
    setSearched([newData[indexOf]]);
    setData(newData);
  };

  const handlerOnChange = debounce((e) => {
    const filteredCartoons = data?.filter((el) => {
      if (
        el.from.slice(0, e.target.value.length) === e.target.value.toUpperCase()
      ) {
        return el;
      }
    });
    setSearched(filteredCartoons);
    setLengthSearch(e.target.value.length);
  }, 500);

  useEffect(() => {
    handlerOnChange();
  }, [searched]);

  return (
    <main className="chartPageMain">
      <h3 style={{ color: "#0a146d", textAlign: "center" }}>
        Popular conversions
      </h3>
      <input
        onChange={(e) => handlerOnChange(e)}
        className="input-search"
        placeholder="search..."
      />
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
        {lengthSearch > 1 ? (
          <tbody>
            {searched?.map((el, index) => (
              <tr key={index}>
                <td className="nameOfCurrency">1 {el.from}</td>
                <td style={{ border: "none" }}>
                  <div
                    style={{
                      color: "#0a146d",
                      marginLeft: "20px",
                      textAlign: "center",
                    }}
                    onClick={() => handleClick(el.ID)}
                  >
                    <Icon size={30} icon={arrowSwap} />
                  </div>
                </td>
                <td className="valueOfCurrency">
                  {el?.value} {el?.to}
                </td>
                <td className="valueOfCurrency">{el?.diff}</td>
                <td>
                  {el?.diff >= 0 ? (
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
        ) : (
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
                    onClick={() => handleClick(el.ID)}
                  >
                    <Icon size={30} icon={arrowSwap} />
                  </div>
                </td>
                <td className="valueOfCurrency">
                  {el?.value} {el?.to}
                </td>
                <td className="valueOfCurrency">{el?.diff}</td>
                <td>
                  {el?.diff >= 0 ? (
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
        )}
      </table>
    </main>
  );
}
