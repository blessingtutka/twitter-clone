import Button from '../global/button';
import TweetEditorActions from './tweet-editor-actions'

function TweetEditorButtons(){
  return (
    <div className='tweet-editor-buttons'>
      <TweetEditorActions />
      <Button value='Tweet'/>
    </div>
  );
}

export default TweetEditorButtons