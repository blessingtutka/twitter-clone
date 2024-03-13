import FollowInfo from "./follow-info"
import ProfilePhoto from '../../global/profile-photo'
import FollowButton from "./follow-button"

export default function FollowItem({avatar,author,username, link}) {

  return (
    <div className="follow-item">
      <div className="info">
        <ProfilePhoto src={avatar}/>
        <FollowInfo author={author} username={username} />
      </div>

      <FollowButton link={link} />
    </div>
  )
}
