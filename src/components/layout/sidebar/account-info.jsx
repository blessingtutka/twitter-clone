import Icon from '../../global/icon'
import {privat} from '../../../tools/media'

export default function AccountInfo() {
  return (
    <div className='account-info'>
        <span className='auth'><span>Bradley Ortiz</span> <Icon src={privat} /></span>
        <span className='nck'>@bradley_</span>
    </div>
  )
}
