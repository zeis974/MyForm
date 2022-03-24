import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export function AppProvider({ children }) {
 const [prerequisites, setPrerequisites] = useState([]);
 const [stacks, setStacks] = useState([]);
 const [subject, setSubject] = useState("");

 const router = useRouter();

 useEffect(() => {
  const query = router.asPath;
  const subjectArr = ["maths", "physique", "i2d"];

  for (let i = 0; i < subjectArr.length; i++) {
   let path = query.includes(subjectArr[i]);

   if (path) {
    setSubject(subjectArr[i]);
   }
  }
 }, [router.asPath]);

 return (
  <Context.Provider
   value={{
    prerequisites,
    setPrerequisites,
    stacks,
    setStacks,
    subject,
   }}
  >
   {children}
  </Context.Provider>
 );
}

export function AppContext() {
 return useContext(Context);
}
