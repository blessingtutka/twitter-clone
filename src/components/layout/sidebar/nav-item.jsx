import { Link } from 'react-router-dom'
import Icon from '../../global/icon'

export default function NavItem({icon,text,link}) {
  return (
   <div className='nav-item'><Link to={link}><Icon src={icon} alt={text}/><span>{text}</span></Link></div>
  )
}
