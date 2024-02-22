import TopTweets from './top-tweets'
import PageTitle from './page-title'

function Header(){
    return (
      <div className='header'>
        <PageTitle title='Home'/>
        <TopTweets />
      </div>
    )
  }

export default Header