import TweetBody from "./tweet-body"

function TweetContent({tweet}) {
    return (
        <div className='tweet-content'>
          <TweetBody tweet={tweet} />
        </div>
    )
  }

export default TweetContent