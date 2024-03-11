import React from 'react'
import Sidebar from './sidebar'
import Trends from './trends'
import {Outlet} from 'react-router-dom'
export default function Layout() {
  return (
    <div className='layout'>
        <Sidebar />
        <Outlet />
        <Trends />
    </div>
  )
}
