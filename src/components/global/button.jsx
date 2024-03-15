import Icon from "./icon"
import { twitter } from "../../tools/media"
function Button({value, action}){
    return (
      <button className='button' onClick={action}><Icon src={twitter}/><span>{value}</span></button>
    )
}

export default Button