import {useRef, useState} from 'react'

export default function FollowButton() {
    let btn = useRef(null)
    const [isFollowing, setIsFollowing] = useState(false)
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleFollow = () => {
      setIsFollowing(prevState => !prevState);
    };

    const buttonText = isFollowing ? 'Following' : 'Follow';
    const buttonClass = isFollowing ? 'button following btn-follow' : 'button btn-follow';
    
    return (
        <button ref={btn} tabIndex="0" className={buttonClass} type="" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={()=> handleFollow() }>{isHovered && isFollowing? 'Unfollow' : buttonText}</button>
    )
}
