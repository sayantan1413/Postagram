import React, {useState} from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import './Post.css';

const LikeButtons = () => {

    const [upvote, setUpvote] = useState(0);
    return (
        <>
            <ThumbUpIcon
                className="post__likeicon"
                onClick={() => {setUpvote(upvote + 1)}} />
            <ThumbDownIcon
                className="post__likeicon"
                onClick={() => setUpvote(upvote - 1)} />
            <span>{upvote}</span>
        </>
    )
}


export default LikeButtons;