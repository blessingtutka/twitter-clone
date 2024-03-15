import React, { useRef, useState } from 'react';

export default function FollowButton() {
    const btnRef = useRef(null);
    const [isFollowing, setIsFollowing] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleFollow = (e) => {
        e.stopPropagation();
        setIsFollowing(prevState => !prevState);
    };

    const buttonText = isFollowing ? 'Following' : 'Follow';
    const buttonClass = isFollowing ? 'button following btn-follow' : 'button btn-follow';
    const buttonContent = isHovered && isFollowing ? 'Unfollow' : buttonText;

    return (
        <button
            ref={btnRef}
            tabIndex="0"
            className={buttonClass}
            type="button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleFollow}>
            {buttonContent}
        </button>
    );
}
