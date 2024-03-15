import FollowInfo from "./follow-info"
import ProfilePhoto from '../../global/profile-photo'
import FollowButton from "./follow-button"
import {Link, useNavigate} from "react-router-dom"

export default function FollowItem({avatar,author,username}) {
  const nav = useNavigate()

  return (
    <div className="follow-item" tabIndex="0" role="button" onClick={()=> nav('/user/'+username) }>
      <div className="info">
        <ProfilePhoto src={avatar}/>
        <FollowInfo author={author} username={username} />
      </div>
      <FollowButton/>
    </div>
  )
}
