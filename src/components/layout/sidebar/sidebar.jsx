import React from 'react'
import Nav from './nav'
import Account from './account'
export default function Sidebar() {
  return (
    <div className='sidebar'> 
        <Nav />
        <Account />
    </div>
  )
}
