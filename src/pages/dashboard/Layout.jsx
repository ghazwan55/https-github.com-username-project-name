import React from 'react'
import Navbardas from '../../components/dashboard/Navbar'
import SideNavbar from '../../components/dashboard/SideNavbar'
function layout() {
  return (
    <div className="flex flex-col h-screen">
   <Navbardas/>
   <div className="flex-col">
    <SideNavbar/> 
   </div>
    </div>
  )
}

export default layout
