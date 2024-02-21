import TweetTitle from './tweet-title'
import TweetText from './tweet-text'
import TweetImage from './tweet-image'
import TweetActions from './tweet-actions'

function TweetBody({tweet}) {
    return (
        <div className='tweet-body'>
            <TweetTitle author={tweet.author} detail={tweet.detail} time={tweet.time}/>
            <TweetText text={tweet.text}/>
            {tweet.image && <TweetImage src={tweet.image} />}
            <TweetActions data={tweet}/>
        </div>
    )
  }

export default TweetBody