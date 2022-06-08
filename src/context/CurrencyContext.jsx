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

  const value = {
    allKeys: allKeys,
  };
  return (
    <ContextComponent.Provider value={value}>
      {children}
    </ContextComponent.Provider>
  );
};
export default ContextProvider;
