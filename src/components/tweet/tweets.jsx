import Tweet from "./tweet"


function Tweets({data}) {
    let mediadata = Object.keys(data)
    return (
        <div className='tweets'>
            {mediadata.map((id, key) => { 
                const tweet = data[id]
                return (
                    <Tweet key={key} tweet={tweet} />
                )}
            )} 
        </div>
    )
  }

export default Tweets