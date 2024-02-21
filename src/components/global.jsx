/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react'

// GLOBAL COMPONENTS
function ProfilePhoto({src}){
    return (
      <div className='avatar'>
         <img src={src} ></img>
      </div>
     
    )
  }
  
function Icon({src, alt}){
    return (
      <img src={src} alt={alt} className='icon'></img>
    )
  }
  
function Button({value}){
    return (
      <button className='button'>{value}</button>
    )
}

export {ProfilePhoto, Icon, Button}