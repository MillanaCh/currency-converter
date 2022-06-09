import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { Icon } from "react-icons-kit";
import { top } from "react-icons-kit/iconic/top";
import { bottom } from "react-icons-kit/iconic/bottom";
import { thickRight } from "react-icons-kit/iconic/thickRight";
import { ic_autorenew } from "react-icons-kit/md/ic_autorenew";
import Select from "react-select";
import { ContextComponent } from "../context/CurrencyContext";

export default function Convert() {
  const { allKeys } = useContext(ContextComponent);

  const [selectFrom, setSelectFrom] = useState("EUR");
  const [selectTo, setSelectTo] = useState("USD");
  const [inputFrom, setInputFrom] = useState(1);
  const [inputTo, setInputTo] = useState(1);

  const valueKeys = Object.keys(allKeys);
  let currencyType = valueKeys.map((el) => ({ label: el, value: el }));

  const handleClickConverter = () => {
    setSelectFrom(selectTo);
    setSelectTo(selectFrom);
    setInputFrom(1);
    setInputTo(
      (
        (((1 * allKeys[selectTo]?.Value) / allKeys[selectFrom]?.Value) *
          allKeys[selectFrom]?.Nominal) /
        allKeys[selectTo]?.Nominal
      ).toFixed(2)
    );
  };

  function handleinputFromChange(inputFrom) {
    setInputTo(
      (
        (((inputFrom * allKeys[selectFrom]?.Value) / allKeys[selectTo]?.Value) *
          allKeys[selectTo]?.Nominal) /
        allKeys[selectFrom]?.Nominal
      ).toFixed(2)
    );
    setInputFrom(inputFrom);
  }

  function handleselectFromChange(selectFrom) {
    setInputTo(
      (
        (((inputFrom * allKeys[selectFrom]?.Value) / allKeys[selectTo]?.Value) *
          allKeys[selectTo]?.Nominal) /
        allKeys[selectFrom]?.Nominal
      ).toFixed(2)
    );
    setSelectFrom(selectFrom);
  }

  function handleinputToChange(inputTo) {
    setInputFrom(
      (
        (((inputTo * allKeys[selectTo]?.Value) / allKeys[selectFrom]?.Value) *
          allKeys[selectTo]?.Nominal) /
        allKeys[selectFrom]?.Nominal
      ).toFixed(2)
    );
    setInputTo(inputTo);
  }

  function handleselectToChange(selectTo) {
    setInputTo(
      (
        (((inputFrom * allKeys[selectTo]?.Value) / allKeys[selectFrom]?.Value) *
          allKeys[selectTo]?.Nominal) /
        allKeys[selectFrom]?.Nominal
      ).toFixed(2)
    );
    setSelectTo(selectTo);
  }

  let topFunction = (
    (allKeys[selectFrom]?.Value / allKeys[selectTo]?.Value) *
    allKeys[selectTo]?.Nominal
  ).toFixed(2);

  let difference;
  function checkPrevious() {
    let currency = (
      (allKeys[selectFrom]?.Previous / allKeys[selectTo]?.Previous) *
      allKeys[selectTo]?.Nominal
    ).toFixed(2);
    difference = (currency - topFunction).toFixed(2);
  }
  checkPrevious();

  return (
    <div className="pageConvert">
      <section className="currency">
        <table className="table">
          <thead>
            <tr style={{ width: "300px" }}>
              <th>From</th>
              <th></th>
              <th>To</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1 {selectFrom} ({allKeys[selectFrom]?.Name})
              </td>
              <td style={{ border: "none" }}>
                <div
                  style={{
                    color: "#0018c6",
                    margin: "0 20px 0 20px",
                    textAlign: "center",
                  }}
                >
                  <Icon size={35} icon={thickRight} />
                </div>
              </td>
              <td>
                {topFunction} {selectTo} ({allKeys[selectTo]?.Name})
              </td>
              <td style={{ border: "none" }}>
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
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="converter">
        <article className="article">
          <h3 style={{ padding: "0 0 8px 5px", color: "#035b8c" }}>
            {allKeys[selectFrom]?.Name}
          </h3>
          <div className="flex-article">
            <Select
              value={{ value: selectFrom, label: selectFrom }}
              options={currencyType}
              className="select"
              onChange={(opt) => handleselectFromChange(opt.label)}
            />
            <input
              type="number"
              value={inputFrom}
              className="input"
              onChange={(e) => handleinputFromChange(e.target.value)}
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
            {allKeys[selectTo]?.Name}
          </h3>
          <div className="flex-article">
            <Select
              value={{ value: selectFrom, label: selectTo }}
              options={currencyType}
              className="select"
              onChange={(opt) => handleselectToChange(opt.label)}
            />
            <input
              disabled
              value={inputTo}
              className="input"
              onChange={(e) => handleinputToChange(e.target.value)}
            />
          </div>
        </article>
      </section>
    </div>
  );
}
