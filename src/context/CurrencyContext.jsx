import { createContext } from "react";

export const ContextComponent = createContext();

const ContextProvider = ({ children }) => {
  const value = {};
  return (
    <ContextComponent.Provider value={value}>
      {children}
    </ContextComponent.Provider>
  );
};
export default ContextProvider;
