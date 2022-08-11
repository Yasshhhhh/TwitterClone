import React from 'react'
import "./css/SidebarOption.css"
function SidebarOption({Active,Icon,text}) 
{
  return ( 
    // eslint-disable-next-line
    <div className={"SidebarOption" +" "+ (Active && "SidebarOption--Active")}>
    <Icon/>
    <h2>{text}
    </h2>   
   </div>
  )
}

export default SidebarOption