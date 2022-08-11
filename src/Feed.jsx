import React from 'react'
import { useState,useEffect } from 'react'
import "./css/Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebase'
function Feed() {
  const [posts,setPosts]= useState([]);
  useEffect( ()=>
  {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc =>doc.data()))
    ))
  },[])

  return (
    <div className='Feed'> 
    <div className='Feed--header'>
     <h2>Home</h2>        
    </div>
    <TweetBox/>
    {
      posts.map( post => (
      <Post Verified={post.Verified} 
      DisplayName={post.displayName} 
      UserName={post.UserName}
      Text={post.Text}
      avatar={post.avatar}
      Image={post.Image}
      />
    )
    )
      
    }
   


   </div>

  )
}

export default Feed