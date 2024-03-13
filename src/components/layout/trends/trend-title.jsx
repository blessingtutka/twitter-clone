import React from 'react'
import Icon from '../../global/icon'
import {setting} from '../../../tools/media'
export default function TrendTitle() {
  return (
    <div className='trend-title'>
        <h3>Trends for you</h3>
        <Icon src={setting} />
    </div>
  )
}
