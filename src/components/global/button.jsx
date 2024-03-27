import Icon from "./icon"
import { twitter } from "../../tools/media"
function Button({value, action,type}){
    return (
      <button className='button' onClick={action} type={type}><Icon src={twitter}/><span>{value}</span></button>
    )
}

export default Button