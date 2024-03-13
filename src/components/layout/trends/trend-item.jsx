import React from 'react'
import {dot3} from '../../../tools/media'
import Icon from '../../global/icon'
export default function TrendItem() {
  return (
    <div className='trend-item'>
        <div>
            <span>Trending in Turkey</span>
            <span>#SQUID</span>
            <span>2,066 Tweets</span>
        </div>
        <div>
            <Icon src={dot3}/>
        </div>
    </div>
  )
}
