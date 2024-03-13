export default function FollowInfo({author,username}) {
  return (
    <div className='follow-info'>
       <span>{author}</span>
       <span>@{username}</span>
    </div>
  )
}
