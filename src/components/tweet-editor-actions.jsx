import {emoji,gif,poll,media,schedule} from '../tools/media'
import {Icon} from './global'

function TweetEditorActions(){
  let actions =  [media, gif, poll,emoji, schedule ]
  return (
    <div className='tweet-editor-actions'>
      {actions.map((icon, key) => (
        <Icon key={key} src={icon} alt={key} />
      ))}
    </div>
  );
}

export default TweetEditorActions