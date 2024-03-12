import { Link } from 'react-router-dom'
import Icon from '../../global/icon'

export default function NavItem({icon,text}) {
  return (
   <div className='nav-item'><Link><Icon src={icon} alt={text}/><span>{text}</span></Link></div>
  )
}
