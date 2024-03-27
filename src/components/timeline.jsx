
import Header from "./header/header"
import TweetEditor from "./tweet-editor/tweet-editor"
import Tweets from "./tweet/tweets"
import database from "../tools/data.json"
import TweetContext, {UserTweetContext} from '../tools/context';
import { useState,useContext, useRef } from "react";

function Timeline() { 
  let [data, setData]= useState(database)

  let tweets = [...data.user.tweets,...data.media]
  return (
    <div className='timeline'>
      <Header />

      <UserTweetContext.Provider value={{data, setData}}>
        <TweetEditor/>
      </UserTweetContext.Provider>

      <TweetContext.Provider value={tweets}>
        <Tweets />
      </TweetContext.Provider>
      
    </div>
  )
}

export default  Timeline