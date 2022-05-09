import I2dIllustrations from "./I2dIllustrations";
import MathsIllustration from "./MathsIllustration";
import PhysiqueIllustration from "./PhysiqueIllustration";

export default function Illustration({ subject }) {
 if (subject === "maths") {
  return <MathsIllustration />;
 } else if (subject === "physique-chimie") {
  return <PhysiqueIllustration />;
 } else if (subject === "i2d") {
  return <I2dIllustrations />;
 }
}
