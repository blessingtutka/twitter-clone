import TweetAvatar from "./tweet-avatar"
import TweetContent from "./tweet-content"
function Tweet({tweet}) {

    return (
      <div className='tweet'>
        <TweetAvatar avatar={tweet.avatar} username={tweet.title.author} />
        <TweetContent tweet={tweet} />
      </div>
    )
  }

export default Tweet