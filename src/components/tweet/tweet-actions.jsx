import {reply,react,retweet,share} from '../../tools/media'
import { Tooltip } from 'react-tooltip';
import Icon from "../global/icon"

function TweetActions({ data }) {
  const actions = [
    { icon: reply, count: data.reply || '', tooltipContent: 'react' },
    { icon: retweet, count: data.retweet || '', tooltipContent: 'retweet' },
    { icon: react, count: data.react || '', tooltipContent: 'like' },
    { icon: share, count: '', tooltipContent: 'share' }
  ];

  return (
    <div className='tweet-actions'>
      {actions.map((action, key) => 
        (
          <div key={key} className='tweet-action' data-tooltip-id={`tooltip${key}`} data-tooltip-content={action.tooltipContent} data-tooltip-place='bottom'>
            <Icon src={action.icon} alt={key} />
            <span>{action.count}</span>
            <Tooltip id={`tooltip${key}`} />
          </div>
        )
      )}
    </div>
  );
}

export default TweetActions