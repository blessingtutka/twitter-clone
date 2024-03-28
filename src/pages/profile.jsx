import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import DataContext, { TweetContext } from '../tools/context';
import Tweets from '../components/tweet/tweets';
import ProfileInfo from '../components/profile/profile-info'

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
    const {username} = useParams()
    
    const media = data.media
    const user = data.user

    const poster = request(media,username)
    const isUser = user.username==username?true:false
    const tweets = poster?[poster]:isUser?[...data.user.tweets]:[]
    return (
    
    <div className='profile'>
        { poster? 
          <ProfileInfo avatar={poster.avatar} name={poster.title.author} username={username} />
        :isUser?
          <ProfileInfo avatar={user.profile} name={user.name} username={username} />
        :<h1>Unknown</h1>
        }

        <TweetContext.Provider value={tweets}>
          <Tweets />
        </TweetContext.Provider>
    </div>
    )
}

