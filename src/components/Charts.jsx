import React from "react";
import { useContext } from "react";
import { ContextComponent } from "../context/CurrencyContext";
import { Icon } from "react-icons-kit";
import { caretUp } from "react-icons-kit/fa/caretUp";
import { caretDown } from "react-icons-kit/fa/caretDown";

export default function MainPageCharts() {
  const { allKeys } = useContext(ContextComponent);

  let differenceUsdEur;
  function checkUsdEur() {
    let UsdEurValue = (
      (allKeys["USD"]?.Value / allKeys["EUR"]?.Value) *
      allKeys["EUR"]?.Nominal
    ).toFixed(2);
    let UsdEurPrevious = (
      (allKeys["USD"]?.Previous / allKeys["EUR"]?.Previous) *
      allKeys["EUR"]?.Nominal
    ).toFixed(2);
    differenceUsdEur = (UsdEurPrevious - UsdEurValue).toFixed(2);
  }
  checkUsdEur();

  let differenceGbpEur;
  function checkGbpEur() {
    let GbpEurValue = (
      (allKeys["GBP"]?.Value / allKeys["EUR"]?.Value) *
      allKeys["EUR"]?.Nominal
    ).toFixed(2);
    let GbpEurPrevious = (
      (allKeys["GBP"]?.Previous / allKeys["EUR"]?.Previous) *
      allKeys["EUR"]?.Nominal
    ).toFixed(2);
    differenceGbpEur = (GbpEurPrevious - GbpEurValue).toFixed(2);
  }
  checkGbpEur();

  let differenceUsdJpy;
  function checkUsdJpy() {
    let UsdJpyValue = (
      (allKeys["USD"]?.Value / allKeys["JPY"]?.Value) *
      allKeys["JPY"]?.Nominal
    ).toFixed(2);
    let UsdJpyPrevious = (
      (allKeys["USD"]?.Previous / allKeys["JPY"]?.Previous) *
      allKeys["JPY"]?.Nominal
    ).toFixed(2);
    differenceUsdJpy = (UsdJpyPrevious - UsdJpyValue).toFixed(2);
  }
  checkUsdJpy();

  let differenceGbpUsd;
  function checkGbpUsd() {
    let GbpUsdValue = (
      (allKeys["GBP"]?.Value / allKeys["USD"]?.Value) *
      allKeys["USD"]?.Nominal
    ).toFixed(2);
    let GbpUsdPrevious = (
      (allKeys["GBP"]?.Previous / allKeys["USD"]?.Previous) *
      allKeys["USD"]?.Nominal
    ).toFixed(2);
    differenceGbpUsd = (GbpUsdPrevious - GbpUsdValue).toFixed(2);
  }
  checkGbpUsd();

  let differenceUsdKgs;
  function checkUsdKgs() {
    let UsdKgsValue = (
      (allKeys["USD"]?.Value / allKeys["KGS"]?.Value) *
      allKeys["KGS"]?.Nominal
    ).toFixed(2);
    let UsdKgsPrevious = (
      (allKeys["USD"]?.Previous / allKeys["KGS"]?.Previous) *
      allKeys["KGS"]?.Nominal
    ).toFixed(2);
    differenceUsdKgs = (UsdKgsPrevious - UsdKgsValue).toFixed(2);
  }
  checkUsdKgs();

  let differenceUsdKzt;
  function checkUsdKzt() {
    let UsdKztValue = (
      (allKeys["USD"]?.Value / allKeys["KZT"]?.Value) *
      allKeys["KZT"]?.Nominal
    ).toFixed(2);
    let UsdKztPrevious = (
      (allKeys["USD"]?.Previous / allKeys["KZT"]?.Previous) *
      allKeys["KZT"]?.Nominal
    ).toFixed(2);
    differenceUsdKzt = (UsdKztPrevious - UsdKztValue).toFixed(2);
  }
  checkUsdKzt();

  return (
    <main className="chartPageMain">
      <h3 style={{ color: "#0a146d", textAlign: "center" }}>
        Popular conversions
      </h3>
      <table className="charts-table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD / EUR</td>
            <td>{differenceUsdEur}</td>
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
          <tr>
            <td>GBP / EUR</td>
            <td>{differenceGbpEur}</td>
            <td>
              {differenceGbpEur >= 0 ? (
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
          <tr>
            <td>USD / JPY</td>
            <td>{differenceUsdJpy}</td>
            <td>
              {differenceUsdJpy >= 0 ? (
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
          <tr>
            <td>GBP / USD</td>
            <td>{differenceGbpUsd}</td>
            <td>
              {differenceGbpUsd >= 0 ? (
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
          <tr>
            <td>USD / KGS</td>
            <td>{differenceUsdKgs}</td>
            <td>
              {differenceUsdKgs >= 0 ? (
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
          <tr>
            <td>USD / KZT</td>
            <td>{differenceUsdKzt}</td>
            <td>
              {differenceUsdKzt >= 0 ? (
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
        </tbody>
      </table>
    </main>
  );
}
