import TweetAvatar from "./tweet-avatar"
import TweetContent from "./tweet-content"
function Tweet({tweet}) {
    return (
      <div className='tweet'>
        <TweetAvatar profile={tweet.profile} />
        <TweetContent tweet={tweet} />
      </div>
    )
  }

export default Tweet