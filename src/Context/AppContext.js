import React from "react";
export const AppContext = React.createContext();

export const AppStorage = ({ children }) => {
  const [selectedOption, setSelectedOption] = React.useState("")
  return <AppContext.Provider value={{selectedOption, setSelectedOption }}>{children}</AppContext.Provider>;
};
