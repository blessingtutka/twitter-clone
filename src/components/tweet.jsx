import { ProfilePhoto } from './global'
import TweetTitle from './tweet-title'
import TweetText from './tweet-text'
import TweetImage from './tweet-image'
import TweetActions from './tweet-actions'

function Tweet({tweet}) {
    return (
      <div className='tweet'>
        <div className='tweet-avatar'>
          <ProfilePhoto src={tweet.profile} />
        </div>
        <div className='tweet-content'>
          <div className='tweet-body'>
            <TweetTitle author={tweet.author} detail={tweet.detail} time={tweet.time}/>
            <TweetText text={tweet.text}/>
            {tweet.image && <TweetImage src={tweet.image} />}
            <TweetActions data={tweet}/>
          </div>
        </div>
      </div>
    )
  }

export default Tweet