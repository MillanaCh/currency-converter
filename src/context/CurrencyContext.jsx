import { add } from "lodash";
import { createContext, useEffect, useState } from "react";

export const ContextComponent = createContext();

const ContextProvider = ({ children }) => {
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
  const [allKeys, setAllKeys] = useState([]);
  const [allData, setAllData] = useState([]);

  const valueKeys = Object.keys(allKeys);

  // Charts
  let obj = [];
  let mapping = valueKeys.forEach((el) => {
    obj.push({
      from: el,
      to: "RUB",
      value: allKeys[el]?.Value,
      previous: (allKeys[el]?.Previous).toFixed(4),
      diff: (allKeys[el]?.Previous - allKeys[el]?.Value).toFixed(4),
      ID: allKeys[el]?.ID,
    });
  });

  const value = {
    allKeys: allKeys,
    valueKeys: valueKeys,
    obj: obj,
  };
  return (
    <ContextComponent.Provider value={value}>
      {children}
    </ContextComponent.Provider>
  );
};
export default ContextProvider;
