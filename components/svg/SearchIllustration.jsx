export default function SearchIllustration() {
 return (
  <>
   <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 318 318"
    fill="none"
    preserveAspectRatio="none"
   >
    <circle cx="159" cy="159" r="125" fill="white" />
    <g filter="url(#filter0_f_24_6)" id="circle-large">
     <circle
      cx="159"
      cy="159"
      r="152.5"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth="5"
     />
    </g>
    <g filter="url(#filter1_f_24_6)" id="circle-middle">
     <circle
      cx="159"
      cy="159"
      r="137.5"
      stroke="white"
      strokeOpacity="0.75"
      strokeWidth="5"
     />
    </g>
    <path
     fillRule="evenodd"
     clipRule="evenodd"
     d="M154.07 89.05C139.617 89.6788 131.202 92.4808 121.791 99.7977C119.827 101.325 115.765 105.364 113.827 107.718C108.487 114.203 106.149 121.033 105.317 132.581C105.154 134.847 105.002 138.85 105.001 140.932L105 142.44L108.759 142.433C114.961 142.421 135.865 142.219 135.909 142.17C135.931 142.146 135.911 141.821 135.863 141.45C135.732 140.43 135.836 137.809 136.057 136.543C136.919 131.619 139.495 126.651 142.992 123.172C145.524 120.653 148.247 119.17 152 118.266C157.695 116.894 163.264 117.208 168.296 119.184C170.675 120.118 172.543 121.275 173.924 122.669C177.121 125.894 178.516 129.088 178.918 134.103C179.034 135.548 179.034 137.944 178.918 138.839C178.499 142.075 176.118 147.023 173.236 150.645C172.117 152.051 170.805 153.303 168.612 155.059C165.785 157.321 163.856 158.717 160.013 161.28C155.427 164.339 154.985 164.697 153.306 166.706C149.013 171.84 147.041 176.072 146.11 182.147C145.715 184.721 145.594 186.528 145.542 190.588L145.494 194.392H159.088H172.683L172.745 193.019C172.958 188.269 173.889 184.66 175.617 181.88C177.771 178.414 181.567 174.872 186.528 171.7C190.159 169.379 193.443 167.055 196.433 164.693C200.208 161.711 203.798 158.149 205.479 155.716C206.435 154.334 207.951 151.71 208.936 149.734C210.882 145.829 212.074 142.322 212.745 138.524C212.997 137.098 213 137.044 213 133.392C213 129.633 212.959 128.922 212.588 126.234C210.913 114.112 205.009 105.108 193.777 97.5479C186.453 92.6183 177.605 89.9683 165.685 89.1344C163.865 89.0071 156.318 88.9522 154.07 89.05ZM157.897 206.069C155.036 206.259 151.939 207.238 149.695 208.662C147.638 209.967 145.824 212.015 145.005 213.957C144.41 215.368 144.301 215.955 144.307 217.712C144.311 219.156 144.332 219.355 144.555 220.098C144.689 220.544 145.002 221.322 145.25 221.829C147.144 225.689 151.614 228.483 156.949 229.142C158.208 229.298 160.623 229.259 161.949 229.062C165.623 228.515 168.673 227.066 170.958 224.784C172.366 223.377 173.158 222.125 173.693 220.458C174.424 218.181 174.237 215.642 173.181 213.525C172.358 211.876 170.634 209.968 168.971 208.865C165.884 206.82 161.869 205.806 157.897 206.069Z"
     fill="url(#paint0_linear_24_6)"
    />
    <defs>
     <filter
      id="filter0_f_24_6"
      x="0"
      y="0"
      width="318"
      height="318"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
     >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend
       mode="normal"
       in="SourceGraphic"
       in2="BackgroundImageFix"
       result="shape"
      />
      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_24_6" />
     </filter>
     <filter
      id="filter1_f_24_6"
      x="15"
      y="15"
      width="288"
      height="288"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
     >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend
       mode="normal"
       in="SourceGraphic"
       in2="BackgroundImageFix"
       result="shape"
      />
      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_24_6" />
     </filter>
     <linearGradient
      id="paint0_linear_24_6"
      x1="105"
      y1="245.5"
      x2="445.5"
      y2="-185"
      gradientUnits="userSpaceOnUse"
     >
      <stop stopColor="#6776FF" stopOpacity="0" />
      <stop stopColor="#6776FF" />
      <stop offset="0.793456" stopColor="white" />
     </linearGradient>
    </defs>
   </svg>

   <style jsx>
    {`
     #circle-middle {
      animation: 1.5s spread infinite;
      transform-origin: center;
     }

     @keyframes spread {
      from {
       transform: scale(0.9);
       opacity: 1;
      }
      to {
       transform: scale(1);
       opacity: 0.75;
      }
     }

     #circle-large {
      animation: 1.5s spread2 infinite;
      animation-delay: 1.5s;
      transform: scale(1);
      transform-origin: center;
     }

     @keyframes spread2 {
      0% {
       transform: scale(0.9);
       opacity: 1;
      }
      50% {
       transform: scale(1);
       opacity: 0.25;
      }
      100% {
       //    transform: scale(0.8);
       opacity: 0;
      }
     }
    `}
   </style>
  </>
 );
}
