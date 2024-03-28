import { useParams,useNavigate} from 'react-router-dom'
import { useContext } from 'react'

import  DataContext from '../tools/context';
import Button from '../components/global/button'

const request = (info,nickname) => {
    for (const obj of info) {
      if (obj.title.details && obj.title.details.nickname === nickname) {
        return obj;
      }
    }
    
    return undefined;
  };
export default function Profile() {
    const  {data, setData} = useContext(DataContext)
    const tweets = [...data.user.tweets]
    const {username} = useParams()
    const nav = useNavigate()
    const {user, media} = data
    const info = request(Object.values(media),username)
    return (
    
    <div className='profile'>
        { info? 
        <div className='info'>
            <img src={info.avatar} alt={username} />
            <div>
                <h1>{info.title.author}</h1>
                <p>@{username}</p>
                <Button value='GO Home' action={() => nav('/')} />
            </div>
        </div>:<h1 className='anomynous'>Unknown</h1>
        }

    </div>
    )
}
