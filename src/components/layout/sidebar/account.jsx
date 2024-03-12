import React from 'react'
import AccountInfo from './account-info'
import Icon from '../../global/icon'
import ProfilePhoto from '../../global/profile-photo'
import {dot3,userAvatar} from '../../../tools/media'
export default function Account() {
  return (
    <div className='account'>
        <ProfilePhoto src={userAvatar} />
        <AccountInfo />
        <Icon src={dot3}/>
    </div>
  )
}
