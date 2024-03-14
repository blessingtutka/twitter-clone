import {reply,react,retweet,share} from '../../tools/media'
import Icon from "../global/icon"

function TweetActions({data}){
  let actions =  [[reply,data.reply], [retweet, data.retweet], [react, data.react],[share]]
  return (
    <div className='tweet-actions'>
      {actions.map((action, key) => {
        return (
          <div role='button' key={key} className='tweet-action'>
            <Icon  src={action[0]} alt={key} />
            <span>{action[1]||''}</span>
          </div>
        )}
      )}
    </div>
  )
}

export default TweetActions