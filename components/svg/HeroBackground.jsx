export default function HeroBackground() {
 return (
  <div className="heroBackground">
   <svg
    width="100%"
    height="100%"
    viewBox="0 0 5436 6677"
    fill="none"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
   >
    <path
     fillRule="evenodd"
     clipRule="evenodd"
     d="M0 0H5436V2400V2820.38V6676.84L290.708 4318.4C107.801 4234.56 -0.0500488 4053.86 0.0949707 3865H0V3202V987V0Z"
     fill="url(#paint0_linear_11_22)"
    />
    <defs>
     <linearGradient
      id="paint0_linear_11_22"
      x1="3441"
      y1="3893.5"
      x2="7008"
      y2="-7142"
      gradientUnits="userSpaceOnUse"
     >
      <stop stopColor="#6776FF" />
      <stop offset="0.858821" stopColor="#FEFEFF" />
     </linearGradient>
    </defs>
   </svg>
   <style jsx>
    {`
     .heroBackground {
      position: absolute;
      top: 0;
      z-index: -2;
      width: 100%;
      height: 100vh;
     }
    `}
   </style>
  </div>
 );
}
