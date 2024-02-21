import ProfilePhoto  from "./profile-photo"
function TweetAvatar({profile}) {
    return (
        <div className='tweet-avatar'>
          <ProfilePhoto src={profile} />
        </div>
    )
}


export default TweetAvatar