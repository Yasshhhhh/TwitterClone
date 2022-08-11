import React from 'react'
import "./css/Widgets.css"
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed,TwitterTweetEmbed  } from 'react-twitter-embed';
function Widgets() {
  return (
<div className='Widgets'>
 <div className="Widgets--Input">
 <SearchIcon className='Widgets--SearchIcon'/>
 <input type="text" placeholder='Search Twitter' />
 </div>
  <div className="Widgets--WidgetContainer">
    <h2>What's Happening</h2>
    <TwitterTweetEmbed tweetId='541278904204668929' />
    <TwitterTimelineEmbed sourceType='profile'  options={{height: 400}} screenName='Cristiano'/>
  </div>
</div>
  )
}

export default Widgets