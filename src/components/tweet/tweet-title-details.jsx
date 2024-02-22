function TweetTitleDetails({details}){

  return (
    <span className='tweet-title-details'>@{details.nickname} . {details.time}</span>
)
}

export default TweetTitleDetails