import Tweet from "./tweet"
import { useContext  } from 'react';
import TweetContext from "../../tools/context";
function Tweets() {
    let tweets= useContext(TweetContext)
    return (
        <div className='tweets'>
            {tweets.map((tweet, key) => { 
                return (
                    <Tweet key={key} tweet={tweet} />
                )}
            )} 
        </div>
    )
  }

export default Tweets