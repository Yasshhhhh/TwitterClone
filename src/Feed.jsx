import React from 'react'
import { useState,useEffect } from 'react'
import "./css/Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebase'
function Feed() {
  let [posts,setPosts]= useState([]);
  posts= [
  {
    Image:"",
Text:"Welcome to my Twitter Clone",
UserName:"yash",
Verified:true,
avatar:"./css/yashpic.jpg",
displayName:"Yash Anil",
    
  }
]
  useEffect( ()=>
  {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc =>doc.data()))
    ))
  },[])
  console.log(posts);

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