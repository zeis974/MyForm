import { AppContext } from "@/context/AppContext";

export default function Stacks() {
 const stacks = AppContext().stacks;
 return (
  <>
   <h2>Stacks</h2>
   <ol>
    {stacks.map((stack, index) => (
     <li key={index}>{stack}</li>
    ))}
   </ol>
  </>
 );
}
