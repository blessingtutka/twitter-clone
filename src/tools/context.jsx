import {createContext} from 'react'
import data from './data.json'

export let TweetContext = createContext(data)

let DataContext = createContext(data)

export default DataContext