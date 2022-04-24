import style from "@/styles/Navbar.module.css";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppContext } from "@/context/AppContext";

import CustomLink from "@/components/CustomLink";
import isResponsive, { debounce } from "@/utils/isResponsive";

export default function Navbar() {
 const [device, setDevice] = useState("");
 const [open, setOpen] = useState(false);
 const { handleGesture } = AppContext();
 const router = useRouter();

 /* Init call for detect device */
 useEffect(() => {
  setDevice(isResponsive().device);
 }, [device]);

 /* Detect pages changes and close menu */
 useEffect(() => {
  const handleRouteChange = () => setOpen(false);
  router.events.on("routeChangeStart", handleRouteChange);

  return () => {
   router.events.off("routeChangeStart", handleRouteChange);
  };
 }, [router]);

 /* Detect swipe */
 useEffect(() => {
  try {
   if (handleGesture.direction === "left") {
    setOpen(true);
   } else setOpen(false);
  } catch (e) {
   return undefined;
  }
 }, [handleGesture]);

 /* Handle detection of device on resize */
 useEffect(() => {
  const debouncedHandleResize = debounce(function handleResize() {
   setDevice(isResponsive().device);
  }, 1000);

  window.addEventListener("resize", debouncedHandleResize);

  return () => {
   window.removeEventListener("resize", debouncedHandleResize);
  };
 });

 return (
  <nav className={style.nav} data-open="false">
   <span>
    <Link href="/">
     <a className={style.nav__logo}>MyForm</a>
    </Link>
   </span>
   {device === "desktop" ? (
    <>
     <div className={style.nav__links}>
      <ul>
       <li>
        <CustomLink text="Exercices" path="exercices" />
       </li>
       <li>
        <CustomLink text="Maths" path="fiches/maths" />
       </li>
       <li>
        <CustomLink text="Physique" path="fiches/physique" />
       </li>
       <li>
        <CustomLink text="I2D" path="fiches/i2d" />
       </li>
      </ul>
     </div>
     <div className={style.nav__featureBtn}>
      <Link href="/faq">
       <a>FAQ</a>
      </Link>
     </div>
    </>
   ) : (
    <>
     <button
      className={style.nav__button}
      data-open={open}
      onClick={() => setOpen(!open)}
      tabIndex="0"
     >
      <svg
       width="36"
       height="22"
       viewBox="0 0 36 22"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
      >
       <rect width="36" height="6" rx="2" fill="white" />
       <rect y="8" width="36" height="6" rx="2" fill="white" />
       <rect y="16" width="36" height="6" rx="2" fill="white" />
      </svg>
     </button>
     <div className={style.nav__links}>
      <div>
       <span>MyForm</span>
       <svg
        width="35"
        height="35"
        className={style.icons__close}
        onClick={() => setOpen(!open)}
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
         fill="#2E3A59"
        />
       </svg>
      </div>
      <hr className={style.intersect} />
      <ul>
       <li>
        <CustomLink text="Exercices" path="exercices" />
       </li>
       <li>
        <CustomLink text="Maths" path="fiches/maths" />
       </li>
       <li>
        <CustomLink text="Physique" path="fiches/physique" />
       </li>
       <li>
        <CustomLink text="I2D" path="fiches/i2d" />
       </li>
      </ul>
     </div>
    </>
   )}
  </nav>
 );
}
