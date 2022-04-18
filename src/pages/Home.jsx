import React, { useEffect, useState } from "react";
import HeroSlider from "../components/hero-slider/HeroSlider";
import ProductList from "../components/product-list/ProductList";
import BasicModal from "../components/basic-modal/BasicModal";
const Home = () => {

  // useEffect(()=>{
  //   console.log("component mount edildi")
  // },[])

  // useEffect(()=>{
  //   console.log("component render edilir")
  //   return ()=>{
  //     console.log("Unmount edildi")
  //   }
  // })

  
  const [active, setActive] = useState(false)
  const onClose=()=>{
    setActive(false)
  }
  return (
    <div>
        {/* <div className={`box ${ active ? "my-active" : ""}`}></div>
        <button onClick={()=>setActive(act=>!act)}>Click</button> */}
        <button onClick={()=>setActive(true)}>Modal Toggle</button>
        <BasicModal onClose={onClose} act={active}/>
    </div>
  );
};

export default Home;

    {/* <HeroSlider />

      <hr />
      <ProductList categoryName="category" bannerName="categoryBanners"/>
      <ProductList categoryName="seller" bannerName="sellerBanners"/> */}
