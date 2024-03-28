import { useState } from "react";
import {Outlet} from 'react-router-dom'

import database from "../../tools/data.json"
import DataContext from '../../tools/context';
import Sidebar from './sidebar/sidebar'
import Trends from './trends/trends'

export default function Layout() {
  let [data, setData]= useState(database)
  return ( 
    <div className='layout'>
      <DataContext.Provider value={{data, setData}}>
        <Sidebar />
        <div className='main-content'>
            <Outlet />
        </div>
        <Trends />
      </DataContext.Provider>
    </div>
  )
}
