import {verified} from '../../tools/media'
import Icon  from "../global/icon"

function TweetTitleAuthor({author}){

    return (
        <p className='tweet-title-author'><span>{author}</span><Icon src={verified} /></p>
    )
}

export default TweetTitleAuthor