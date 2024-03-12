import Icon from "./icon"
import { twitter } from "../../tools/media"
function Button({value}){
    return (
      <button className='button'><Icon src={twitter}/><span>{value}</span></button>
    )
}

export default Button