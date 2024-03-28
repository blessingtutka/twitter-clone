import React from 'react'
import Icon from '../global/icon'
import { verified } from '../../tools/media'

export default function ProfileInfo({ avatar, name, username})  {
  return (
    <div className='info'>
        <div className='profile'>
            <img className='cover' src='/src/assets/image-3.png' alt='cover-img'/>
            <img className='avatar' src={avatar} alt={username} />
        </div>
            
        <div className='content'>
            <h1>{name}<Icon src={verified} /></h1>
            <span>@{username}</span>
            <p>Christian, Programmer, IT, and Otaku</p>
            <span>Joined October 2022</span>
        </div>
    </div>
  )
}
