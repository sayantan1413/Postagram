import React, { useState, useEffect } from 'react'
import './App.css';
import Post from './Post'
import { db } from './firebase'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper:{
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,  
        post: doc.data()
      })))
    })
  }, [])
 

  return (
    <div className="app">
    <Modal 
      open={open}
      onClose={() => setOpen(false)}
    >
     <div style={modalStyle} className={classes.paper}>
      <center>
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="Instagram Logo"
        /> 
        <Input 
          type="text"
          placeholder="username"
          value={username}
          onchange={(e) => setUsername(e.target.value)}
        />
        <Input 
          type="text"
          placeholder="email"
          value={email}
          onchange={(e) => setEmail(e.target.value)}
        />
        <Input 
          type="text"
          placeholder="password"
          value={password}
          onchange={(e) => setPassword(e.target.value)}
        />
      </center>
     </div>
    </Modal>
      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="Instagram Logo"
        />
      </div>

      <Button onClick={() => setOpen(true)}>Sign Up</Button>

      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
