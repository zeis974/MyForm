import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export function AppProvider({ children }) {
 const [handleGesture, setHandleGesture] = useState();
 const [scroll, setScroll] = useState();

 /* Detect scroll state */
 useEffect(() => {
  if (scroll === false) document.body.className = "no-scroll";
  else if (scroll === true) document.body.classList.remove("no-scroll");
 }, [scroll]);

 return (
  <Context.Provider
   value={{
    setHandleGesture,
    handleGesture,
    setScroll,
    scroll,
   }}
  >
   {children}
  </Context.Provider>
 );
}

export function AppContext() {
 return useContext(Context);
}
