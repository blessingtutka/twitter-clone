import {createContext} from 'react'
import data from './data.json'

let TweetContext = createContext(data)

export let UserTweetContext = createContext(data)

export default TweetContext