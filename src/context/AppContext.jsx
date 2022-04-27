import { createContext, useContext, useState } from "react";

const Context = createContext();

export function AppProvider({ children }) {
 const [handleGesture, setHandleGesture] = useState();
 return (
  <Context.Provider
   value={{
    setHandleGesture,
    handleGesture,
   }}
  >
   {children}
  </Context.Provider>
 );
}

export function AppContext() {
 return useContext(Context);
}
