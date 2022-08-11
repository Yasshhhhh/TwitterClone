import React from 'react'
import "./css/TweetBox.css"
import { Avatar,Button } from '@mui/material';
import { useState } from 'react';
import db from './firebase';
function TweetBox() 
{
  const [tweet,SetTweet]=useState('');
  function TypeTweet(event)
  { 
    SetTweet(event.target.value);
  }
  const [tweetImage,SetTweetImage]=useState('');
  function TypeTweetImage(event)
  { 
    SetTweetImage(event.target.value);
  }
  const sendTweet = (e) =>
  {
    e.preventDefault();
    db.collection('posts').add(
      {     
        Image:tweetImage,
        Text:tweet,
        UserName:'yashh',
        Verified:true,
        avatar:'https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj',
        displayName:'Yash Anil'

      }
    )
    SetTweetImage("");
    SetTweet("");

    
  }
  return (
    <div className='TweetBox'>
    <form >

    <div className="TweetBox--input">
      <Avatar src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj" >
       </Avatar>
       <input onChange={TypeTweet} value={tweet} type="text" placeholder='Hello' />
    </div>
    <input onChange={TypeTweetImage} value={tweetImage} className='TweetBox--Imageinput' type="text" placeholder='Enter Image  Url' />

    <Button onClick={sendTweet} type='submit' variant='contained' className='TweetBox--tweet'>Tweet</Button>
    </form>


    </div>
  )
}

export default TweetBox