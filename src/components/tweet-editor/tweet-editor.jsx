import ProfilePhoto from "../global/profile-photo"
import TweetEditorForm  from "./tweet-editor-form"
function TweetEditor({profile}) {
  return (
    <div className='tweet-editor'>
      <ProfilePhoto src={profile}/>
      <TweetEditorForm />
    </div>
  )
}

export default TweetEditor