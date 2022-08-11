import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';      
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BallotIcon from '@mui/icons-material/Ballot';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import "./css/Sidebar.css"
function Sidebar() 
{
  return (
    <div className='Sidebar'>
      <TwitterIcon className='Sidebar--twittericon'/>
      <SidebarOption Active Icon={HomeIcon} text="Home"  />
      <SidebarOption Icon={SearchIcon} text="Explore"  />
      <SidebarOption Icon={NotificationsIcon} text="Notifications"/>
      <SidebarOption Icon={MailIcon} text="Messages"/>
      <SidebarOption Icon={BookmarkIcon} text="Bookmarks"/>
      <SidebarOption Icon={BallotIcon} text="Lists"/>
      <SidebarOption Icon={PersonIcon} text="Profile"/>
      <SidebarOption Icon={MoreHorizIcon} text="More"/>
       <Button variant='contained'  className='Sidebar--tweet'>Tweet</Button>

    </div>
    
    
  )
}

export default Sidebar;