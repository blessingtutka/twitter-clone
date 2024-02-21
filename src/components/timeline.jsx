
import Header from "./header"
import TweetEditor from "./tweet-editor"
import Tweet from "./tweet"
import data from "../tools/data"

const {user, media} = data

function Timeline() { 
  let mediadata = Object.keys(media)
  return (
    <div className='timeline'>
      <Header />
      <TweetEditor profile={user.profile} />
      {mediadata.map((id, key) => { 
        const tweet = media[id]
          return (
            <Tweet key={key} tweet={tweet} />
        )}
      )}      
    </div>
  )
}

export default  Timeline