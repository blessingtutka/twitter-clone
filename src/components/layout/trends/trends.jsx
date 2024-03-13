import Trend from "./trend"
import Follow from "./follow"
import SearchBar from "./search-bar"
import React, { useEffect,useState } from 'react';
export default function Trends() {
    let isFixed = false
  // const [isFixed, setIsFixed] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const div = document.querySelector(".trends"); // Change the selector to match your div
  //     const windowHeight = window.innerHeight;
  //     const divHeight = div.offsetHeight;
  //     const divTop = div.getBoundingClientRect().top;
  //     const scrollPosition = window.scrollY;

  //     if (divTop + divHeight <= windowHeight) {
  //       setIsFixed(true);
  //     } else {
  //       setIsFixed(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup function
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className={isFixed ? "trends fixed" : "trends"}> 
      <SearchBar />
      <Trend />
      <Follow />
    </div>
  )
}
