import ProfilePhoto  from "../global/profile-photo"
function TweetAvatar({avatar}) {
    return (
        <div className='tweet-avatar'>
          <ProfilePhoto src={avatar} />
        </div>
    )
}


export default TweetAvatar