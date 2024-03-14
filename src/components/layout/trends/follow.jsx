import FollowItem from "./follow-item"
import FollowTitle from "./follow-title"
import {Link} from 'react-router-dom'
import { avatar1,avatar2,avatar3 } from "../../../tools/media"
import More from "./more"
export default function Follow() {
    let tofollow = [[avatar1,'The New York Times','nytimes'],[avatar2,'CNN','CNN'],[avatar3,'Twitter','Twitter']]
    return (
      <div className="trend-box follow">
        <FollowTitle />
        {tofollow.map((follow,key) => {
          let [avatar,author, username] = follow
          return (
            <FollowItem key={key}  avatar={avatar} author={author} username={username}/>
          )
        })}
        <More />
      </div>
    )
}
