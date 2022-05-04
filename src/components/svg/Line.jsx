export default function Line({ hover }) {
 return (
  <>
   <svg
    data-hover={hover}
    width="100%"
    height="9"
    viewBox="0 0 101 9"
    id="line"
   >
    <path
     d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294"
     pathLength="1"
    />
   </svg>
   <style jsx>
    {`
     @media screen and (max-width: 760px) {
      #line {
       display: none;
       visibility: hidden;
      }
     }
     @media screen and (min-width: 760px) {
      #line {
       position: absolute;
       bottom: -9px;
       left: 0;
       pointer-events: none;
       fill: none;
       stroke: #fff;
       stroke-width: 1px;
      }

      #line path {
       stroke-dasharray: 1;
       stroke-dashoffset: ${hover ? 0 : 1};

       transition: ${hover
        ? null
        : "stroke-dashoffset 0.6s cubic-bezier(0.7, 0, 0.3, 1)"};

       transition-timing-function: ${hover
        ? "cubic-bezier(0.8, 1, 0.7, 1);"
        : null};

       transition-duration: ${hover ? "0.3s" : null};

       transition: stroke-dashoffset 0.6s cubic-bezier(0.7, 0, 0.3, 1);
      }
     }
    `}
   </style>
  </>
 );
}
