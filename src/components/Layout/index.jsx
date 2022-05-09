import Head from "next/head";
import { useState } from "react";

import HeroBackground from "@/components/svg/HeroBackground";
import Navbar from "@/components/Navbar";
import { AppContext } from "@/context/AppContext";

export default function Layout({ children }) {
 const [touchStart, setTouchStart] = useState(null);
 const [touchEnd, setTouchEnd] = useState(null);
 const { setHandleGesture } = AppContext();

 /* The required distance between touchStart and touchEnd to be detected as a swipe */
 const minSwipeDistance = 50;

 const onTouchStart = (e) => {
  setTouchEnd(
   null
  ); /* Otherwise the swipe is fired even with usual touch events */
  setTouchStart(e.targetTouches[0].clientX);
 };

 const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

 const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return;
  const distance = touchStart - touchEnd;
  const isLeftSwipe = distance > minSwipeDistance;
  const isRightSwipe = distance < -minSwipeDistance;
  if (isLeftSwipe || isRightSwipe)
   setHandleGesture({ direction: isLeftSwipe ? "left" : "right" });
 };

 return (
  <>
   <Head>
    <title>MyForm</title>
    <meta rel="shortcut icon" href="/favicon.ico" />
    <link
     rel="preload"
     href="/assets/fonts/RowdiesRegular.woff2"
     as="font"
     crossOrigin=""
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="theme-color" content="#fffff" />
   </Head>
   <Navbar />
   <HeroBackground />
   <main
    onTouchStart={onTouchStart}
    onTouchMove={onTouchMove}
    onTouchEnd={onTouchEnd}
   >
    {children}
   </main>
  </>
 );
}
