import Icon from "./icon"
import { timeline } from '../tools/media'
import PageTitle from './page-title'

function Header(){
    return (
      <div className='header'>
        <PageTitle title='Home'/>
        <div className='top-tweets'>
          <Icon  src={timeline}/>
        </div>
      </div>
    )
  }

export default Header