import React from 'react'
import '../App.css';



export default function Content({theme_control,theme,class_name,img}) {
  return (
    <div className={class_name}>
       <h1>This is page that uses HOC to return the page with theme control</h1>
       <button onClick={theme_control} className='btn' aria-selected="true" role='toggle'>{img}</button>
       <p>click the icon to toggle themes</p>
    </div>
  )
}
