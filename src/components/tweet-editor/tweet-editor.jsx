import { useContext } from 'react';
import { Link } from 'react-router-dom'

import DataContext from "../../tools/context";
import ProfilePhoto from "../global/profile-photo"
import TweetEditorForm  from "./tweet-editor-form"

function TweetEditor() {
  let  {data, setData} = useContext(DataContext)
  return (
    <div className='tweet-editor'>
      
      <Link to={'/user/' + data.user.username}>
        <ProfilePhoto src={data.user.profile}/>
      </Link>
      <TweetEditorForm />

    </div>
  )
}

export default TweetEditor