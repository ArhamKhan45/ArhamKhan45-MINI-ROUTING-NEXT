"use client";

import { createContext, useState } from "react";

export const Contextdata = createContext();

export const Contextprovider = ({ children }) => {
  const [data, setdata] = useState([1]);
  const [filterData, filtersetdata] = useState(null);
  return (
    <Contextdata.Provider value={{ data, setdata, filterData, filtersetdata }}>
      {children}
    </Contextdata.Provider>
  );
};
