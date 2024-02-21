import {verified} from '../tools/media'
import Icon  from "./icon"
function TweetTitle({author,detail,time}){
    return (
    <div className='tweet-title'>
      <p className='tweet-title-author'>{author}</p>
      <Icon src={verified} />
      <span className='tweet-title-details'>@{detail} . {time}</span>
    </div>
  )
}

export default TweetTitle