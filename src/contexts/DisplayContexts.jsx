import { createContext, useState } from "react";

export const DisplayContexts = createContext("");

export const DisplayProvider = ({ children }) => {
  const [aside, setAside] = useState("none");
  const value = { aside, setAside };

  return (
    <DisplayContexts.Provider value={value}>
      {children}
    </DisplayContexts.Provider>
  );
};
