import { useContext } from 'react'
import  DataContext from '../../../tools/context';

import {twitter,Home, Hash, Notification ,Message, 
  Bookmark, List, Profile, More} from '../../../tools/media'
import NavItem from './nav-item'
import Button from '../../global/button'
import Icon from '../../global/icon'

export default function Nav() {
  let {data, setData} = useContext(DataContext)
  let items = [[Home,'Home','/'],[Hash,'Explore','/'],[Notification,'Notifications','/'],[Message, 'Messages','/'],
  [Bookmark,'Bookmarks','/'],[List, 'Lists','/'],[Profile,'Profile','/user/' + data.user.username],[More,'More','/']]
  return (
    <div className='nav'>
        <Icon src={twitter} iconid="brand" />
        {items.map((item,key)=>{
            let [icon,text,link] = item
            return (
                <NavItem link={link} key={key} icon={icon} text={text}/>
            )
         })}
         <Button value='Tweet'/>
    </div>
  )
}
