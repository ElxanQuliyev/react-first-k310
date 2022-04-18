import React, { useEffect, useRef, useState } from "react";
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

  // const [active, setActive] = useState(false)
  // const onClose=()=> setActive(false)
  const myButton = useRef();
  // const myBox=useRef()
  useEffect(() => {
    myButton.current.onclick = (e) =>
      e.target.parentNode.querySelector(".box").classList.toggle("my-active");
  }, []);
  return (
    <div className="tt">
      <div className="box"></div>
      <button ref={myButton}>Click</button>
      {/* <button ref={myButton}>Modal Toggle</button> */}
      {/* <BasicModal onClose={onClose} act={active}/> */}
    </div>
  );
};

export default Home;

{
  /* <HeroSlider />

      <hr />
      <ProductList categoryName="category" bannerName="categoryBanners"/>
      <ProductList categoryName="seller" bannerName="sellerBanners"/> */
}
