
import Sidebar from './sidebar/sidebar'
import Trends from './trends/trends'
import {Outlet} from 'react-router-dom'
export default function Layout() {
  return (
    <div className='layout'>
        <Sidebar />
        <div className='main-content'>
          <Outlet />
        </div>
        <Trends />
    </div>
  )
}
