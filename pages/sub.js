/** @format */
import Image from "next/image";
import { useState } from "react";
export default function Sub() {
  const [menu,setmenu]=useState(false);
  console.log(menu)

  return (
    <>
      <div class="hamburger-menu">
        <input type="checkbox" id="menu-btn-check" onClick={()=>setmenu(!menu)}></input>
        <label for="menu-btn-check" class="menu-btn"><span></span></label>
      </div> 
      <a style={{zIndex:'190',position:'relative',top:'100px'}}>test</a>
      {menu?
      <div style={{backgroundColor:'blue',height:'100vh',top:'0px',position:'abusolute',zIndex:'1'}}></div>
      :
      <a style={{top:'100px'}}>aa</a>}
    </>

    
  );
}
