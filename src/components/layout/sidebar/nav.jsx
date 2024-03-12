import {twitter,Home, Hash, Notification ,Message, Bookmark, List, Profile, More} from '../../../tools/media'
import NavItem from './nav-item'
import Button from '../../global/button'
import Icon from '../../global/icon'
export default function Nav() {
  let items = [[Home,'Home'],[Hash,'Explore'],[Notification,'Notifications'],[Message, 'Messages'],
  [Bookmark,'Bookmarks'],[List, 'Lists'],[Profile,'Profile'],[More,'More']]
  return (
    <div className='nav'>
        <Icon src={twitter} iconid="brand" />
        {items.map((item,key)=>{
            let [icon,text] = item
            return (
                <NavItem key={key} icon={icon} text={text}/>
            )
         })}
         <Button value='Tweet'/>
    </div>
  )
}
