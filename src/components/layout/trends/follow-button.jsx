import {Link, useNavigate} from "react-router-dom"

export default function FollowButton({link}) {
    const nav = useNavigate()
    return (
        <button className="button btn-follow" type="" onClick={()=> nav(link) }>Follow</button>
  )
}
