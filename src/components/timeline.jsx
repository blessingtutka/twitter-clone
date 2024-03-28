import { useContext } from "react";

import  DataContext, { TweetContext } from '../tools/context';
import Header from "./header/header"
import TweetEditor from "./tweet-editor/tweet-editor"
import Tweets from "./tweet/tweets"

function Timeline() { 
  let {data, setData}= useContext(DataContext)

  let tweets = [...data.user.tweets,...data.media]
  return (
    <div className='timeline'>
      
      <Header />
      <TweetEditor/>
      <TweetContext.Provider value={tweets}>
        <Tweets />
      </TweetContext.Provider>
      
    </div>
  )
}

export default  Timeline