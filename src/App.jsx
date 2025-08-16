import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner/Banner.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Products from "./components/Products/Products.jsx";

const App = () => {
const [orderPopup, setOrderPopup] = useState(false);


const handleOrderPopup = () => {
  setOrderPopup(!orderPopup);
};


useEffect(() => {
  Aos.init({
    offset: 100,
    duration: 1000,
    easing: "ease-in-sine",
    delay: 100,
  });
  Aos.refresh();
}), [];



 

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products handleOrderPopup={handleOrderPopup}/>
      <Banner/>
    </div>
  );
};

export default App;
