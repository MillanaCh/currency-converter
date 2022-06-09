import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ContextComponent } from "../context/CurrencyContext";
import { Icon } from "react-icons-kit";
import { caretUp } from "react-icons-kit/fa/caretUp";
import { caretDown } from "react-icons-kit/fa/caretDown";
import { arrowSwap } from "react-icons-kit/ionicons/arrowSwap";

export default function MainPageCharts() {
  const { allKeys } = useContext(ContextComponent);
  
  let obj = [
    { first: "USD", second: "EUR" },
    { first: "GBP", second: "EUR" },
    { first: "USD", second: "JPY" },
    { first: "GBP", second: "USD" },
    { first: "USD", second: "KGS" },
    { first: "USD", second: "KZT" },
  ];

  // console.log(obj);

  // let differenceUsdEur;
  // function checkUsdEur() {
  //   let UsdEurValue = (
  //     (allKeys["USD"]?.Value / allKeys["EUR"]?.Value) *
  //     allKeys["EUR"]?.Nominal
  //   ).toFixed(2);
  //   let UsdEurPrevious = (
  //     (allKeys["USD"]?.Previous / allKeys["EUR"]?.Previous) *
  //     allKeys["EUR"]?.Nominal
  //   ).toFixed(2);
  //   differenceUsdEur = (UsdEurPrevious - UsdEurValue).toFixed(2);
  // }
  // checkUsdEur();

  // let differenceGbpEur;
  // function checkGbpEur() {
  //   let GbpEurValue = (
  //     (allKeys["GBP"]?.Value / allKeys["EUR"]?.Value) *
  //     allKeys["EUR"]?.Nominal
  //   ).toFixed(2);
  //   let GbpEurPrevious = (
  //     (allKeys["GBP"]?.Previous / allKeys["EUR"]?.Previous) *
  //     allKeys["EUR"]?.Nominal
  //   ).toFixed(2);
  //   differenceGbpEur = (GbpEurPrevious - GbpEurValue).toFixed(2);
  // }
  // checkGbpEur();

  // let differenceUsdJpy;
  // function checkUsdJpy() {
  //   let UsdJpyValue = (
  //     (allKeys["USD"]?.Value / allKeys["JPY"]?.Value) *
  //     allKeys["JPY"]?.Nominal
  //   ).toFixed(2);
  //   let UsdJpyPrevious = (
  //     (allKeys["USD"]?.Previous / allKeys["JPY"]?.Previous) *
  //     allKeys["JPY"]?.Nominal
  //   ).toFixed(2);
  //   differenceUsdJpy = (UsdJpyPrevious - UsdJpyValue).toFixed(2);
  // }
  // checkUsdJpy();

  // let differenceGbpUsd;
  // function checkGbpUsd() {
  //   let GbpUsdValue = (
  //     (allKeys["GBP"]?.Value / allKeys["USD"]?.Value) *
  //     allKeys["USD"]?.Nominal
  //   ).toFixed(2);
  //   let GbpUsdPrevious = (
  //     (allKeys["GBP"]?.Previous / allKeys["USD"]?.Previous) *
  //     allKeys["USD"]?.Nominal
  //   ).toFixed(2);
  //   differenceGbpUsd = (GbpUsdPrevious - GbpUsdValue).toFixed(2);
  // }
  // checkGbpUsd();

  // let differenceUsdKgs;
  // function checkUsdKgs() {
  //   let UsdKgsValue = (
  //     (allKeys["USD"]?.Value / allKeys["KGS"]?.Value) *
  //     allKeys["KGS"]?.Nominal
  //   ).toFixed(2);
  //   let UsdKgsPrevious = (
  //     (allKeys["USD"]?.Previous / allKeys["KGS"]?.Previous) *
  //     allKeys["KGS"]?.Nominal
  //   ).toFixed(2);
  //   differenceUsdKgs = (UsdKgsPrevious - UsdKgsValue).toFixed(2);
  // }
  // checkUsdKgs();

  // let differenceUsdKzt;
  // function checkUsdKzt() {
  //   let UsdKztValue = (
  //     (allKeys["USD"]?.Value / allKeys["KZT"]?.Value) *
  //     allKeys["KZT"]?.Nominal
  //   ).toFixed(2);
  //   let UsdKztPrevious = (
  //     (allKeys["USD"]?.Previous / allKeys["KZT"]?.Previous) *
  //     allKeys["KZT"]?.Nominal
  //   ).toFixed(2);
  //   differenceUsdKzt = (UsdKztPrevious - UsdKztValue).toFixed(2);
  // }
  // checkUsdKzt();

  let differenceUsdEur;
  // function checkUsdEur() {
  //   let UsdEurValue = (
  //     (allKeys["USD"]?.Value / allKeys["EUR"]?.Value) *
  //     allKeys["EUR"]?.Nominal
  //   ).toFixed(2);
  //   let UsdEurPrevious = (
  //     (allKeys["USD"]?.Previous / allKeys["EUR"]?.Previous) *
  //     allKeys["EUR"]?.Nominal
  //   ).toFixed(2);
  //   differenceUsdEur = (UsdEurPrevious - UsdEurValue).toFixed(2);
  // }
  // checkUsdEur();

  function checkBetween(el) {
    let value = (
      (allKeys[el.first]?.Value / allKeys[el.second]?.Value) *
      allKeys[el.second]?.Nominal
    ).toFixed(2);
    let prev = (
      (allKeys[el.first]?.Previous / allKeys[el.second]?.Previous) *
      allKeys[el.second]?.Nominal
    ).toFixed(2);
    differenceUsdEur = (prev - value).toFixed(2);
    return differenceUsdEur;
  }
  const handleClick = (index) => {
    let firstObj = obj[index]?.first;
    // obj = obj.map((el) => [
    //   { first: el[index]?.second, second: { ...firstObj } },
    // ]);
    obj[index] = { first: obj[index]?.second, second: firstObj };
    console.log(obj);
    return obj;
  };

  useEffect(() => {
    console.log("mili");
  }, [handleClick()]);

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
          {obj.map((el, index) => (
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
                {differenceUsdEur >= 0 ? (
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
