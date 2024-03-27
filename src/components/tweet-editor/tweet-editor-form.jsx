import { useContext, useRef  } from 'react';
import {UserTweetContext} from "../../tools/context";
import TweetEditorInput from './tweet-editor-input' 
import TweetEditorButtons from './tweet-editor-buttons';
import Button from '../global/button';
import TweetEditorActions from './tweet-editor-actions'
function TweetEditorForm(){
  let  {data, setData} = useContext(UserTweetContext)
  let tweetContent = useRef(null)
  let user = data.user

  let handleSubmit = (e) => {
    e.preventDefault();
    const tweet = {
      title:{
          author:user.username,
          details:{
              nickname:user.username,
              time:'7m'
          }
      },
      avatar:user.profile,
      text:tweetContent.current.value,
      image:null,
      data:{
          reply:"0",
          retweet:"0",
          react:"0"
      }
      
    }
    tweetContent?setData({ ...data, user: { ...data.user, tweets: [tweet, ...data.user.tweets] } }):'';
  }
  return (
    <form className='tweet-editor-form' onSubmit={handleSubmit}>

      <TweetEditorInput> 
        <textarea className='tweet-editor-input' placeholder="What's happening" ref={tweetContent}></textarea>
      </TweetEditorInput>

      <TweetEditorButtons>
        <TweetEditorActions />
        <Button value='Tweet' type='submit' />
      </TweetEditorButtons>
    </form>
  );   
}

export default TweetEditorForm