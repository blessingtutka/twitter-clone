import ProfilePhoto  from "../global/profile-photo"
import {Link} from "react-router-dom"
function TweetAvatar({avatar,username}) {
    return (
        <div className='tweet-avatar'>
          <Link to={'/user/' + username}><ProfilePhoto src={avatar} /></Link>
        </div>
    )
}


export default TweetAvatar