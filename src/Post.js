import React from 'react';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Post.css';
function Post({ username, caption, imageUrl }) {
    return (
        <div className="post">
        <div className="post__header">
        <div className="post__detail">
        <Avatar
            className="post__avatar"
            alt={username}
            src="/static/images/avatar/1.jpg"
        />
            <h3 className="post__username">{username}</h3>
        </div>
        <div className="post__option">
            <MoreHorizIcon className="post__morehorizicon"/>
        </div>
        </div>
            <img className="post__image" src={imageUrl}/>
            <h4 className="post__text"><strong>{username}</strong> : {caption}</h4>
        </div>
    )
}

export default Post
