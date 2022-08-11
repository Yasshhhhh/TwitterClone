import React from 'react'
import "./css/Post.css"
import { Avatar} from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublishIcon from '@mui/icons-material/Publish';
import VerifiedIcon from '@mui/icons-material/Verified';

function Post({DisplayName,UserName,Verified,Text,Image,avatar}) 
{
  return (
    <div className='Post'>
    <div className="Post--avatar">
        <Avatar src={avatar}>

        </Avatar>
        </div>

        <div className="Post--Body">
            <div className="Post--Header">
                <div className="Post--HeaderText">
                    <h3>{DisplayName}
                     <span className='Post--HeaderSpecial'>
                     {Verified && (<VerifiedIcon className='Post--Badge'/>)}
                     @{UserName}
                    </span>
                    </h3>
                </div>
                <div className="Post--HeaderDescription">
                      <p>{Text}</p>
                </div>
            </div>
            <img src={Image} alt="" />
        <div className="Post--Footer">
          <ChatBubbleIcon fontSize='small'/>
          <RepeatIcon fontSize='small'/>
          <FavoriteIcon fontSize='small'/>
          <PublishIcon fontSize='small'/>
        </div>
        </div>

    </div>
  )
}

export default Post