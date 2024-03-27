import { useContext, useRef  } from 'react';
import {UserTweetContext} from "../../tools/context";
import ProfilePhoto from "../global/profile-photo"
import TweetEditorForm  from "./tweet-editor-form"
function TweetEditor() {
  let  {data, setData} = useContext(UserTweetContext)
  return (
    <div className='tweet-editor'>
      <ProfilePhoto src={data.user.profile}/>
      <TweetEditorForm />
    </div>
  )
}

export default TweetEditor