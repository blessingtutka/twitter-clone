import TweetTitleAuthor from './tweet-title-author'
import TweetTitleDetails from './tweet-title-details'
import {Link} from 'react-router-dom'

function TweetTitle({author,details}){

  return (
  <div className='tweet-title'>
    <Link to={'/user/' + details.nickname}>
      <TweetTitleAuthor author={author} />
      <TweetTitleDetails details={details} />
    </Link>
  </div>
)
}

export default TweetTitle