import React, { useState } from "react";
import dark from '../dark.png'
import light from '../light.png'

export default function Theme(WrappedComponents) {
const [theme, setTheme] = useState(true);
 return (props)=>{
  const theme_control=()=>{
    setTheme(!theme);
  }
  const class_name=theme? 'light':'dark';
  const img=theme? <img src={dark}/>:<img src={light}/>
  return(
    <WrappedComponents theme_control={theme_control} class_name={class_name} img={img}/>

  );
 }
}
