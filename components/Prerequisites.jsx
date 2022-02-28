import { AppContext } from "../context/AppContext";

export default function Prerequisites() {
 const prerequisites = AppContext().prerequisites;
 return (
  <>
   <h2>Prerequisites</h2>
   <ol>
    {prerequisites.map((prerequisite, index) => (
     <li key={index}>{prerequisite}</li>
    ))}
   </ol>
  </>
 );
}
