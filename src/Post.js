import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LikeButtons from './LikeButtons';
import Button from '@mui/material/Button';
import firebase from 'firebase/app'
import './Post.css';
import { db } from './firebase';

function Post({ username, caption, imageUrl, postId, user }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
   
    useEffect(() => {
        let unsubscribe;
        if(postId) {
            unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()));
            })
        }
        return () => {
            unsubscribe();
        };
    }, [postId]);

    const postComment = (event) => {
        event.preventDefault();
        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user?.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setComment('');
    }

    
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
            <img className="post__image" src={imageUrl} />
            <div className="post__like">
                <LikeButtons />
                
            </div>
            <h4 className="post__text"><strong>{username}</strong> : {caption}</h4>
            <div className="post__comments">
                {comments.map((comment) => {
                    return (
                        <p>
                            <strong>{comment.username}</strong>: {comment.text}
                        </p>
                    );
                })
                }
            </div>
            {user && (
                <form className="post__commentBox">
                <input 
                    className="post__input" 
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button 
                    className="post__button"
                    disabled={!comment}
                    type="submit"
                    onClick={postComment}
                > Post </button>
            </form>
            )}
            
        </div>
    )
}

export default Post
