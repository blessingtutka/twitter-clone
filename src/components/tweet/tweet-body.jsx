import TweetTitle from './tweet-title'
import TweetText from './tweet-text'
import TweetImage from './tweet-image'
import TweetActions from './tweet-actions'

function TweetBody({tweet}) {
    const title = tweet.title
    const data = tweet.data
    return (
        <div className='tweet-body'>
            <TweetTitle author={title.author} details={title.details}/>
            <TweetText text={tweet.text}/>
            {tweet.image && <TweetImage src={tweet.image} />}
            <TweetActions data={data}/>
        </div>
    )
  }

export default TweetBody