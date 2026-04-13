import React from 'react'
import { NavLink } from 'react-router-dom'

function SideNavbar() {
    const SideNavbarLink=[
      {
        name:"Dashboad",path:"/dashboard"
      },
       {
        name:"AddHotel",path:"/dashboard/add-hotel"
      }  ,
       {
        name:"HotelList",path:"/dashboard/hotel-list"
      }    
    ]
  return (
    <div className="h-screen md:w-65 border-r text-base flex flex-col pt-5 transition-all duration-500 border-gray-300">
      {SideNavbarLink.map((item,index)=>(
       <NavLink to={item.path} className={({isActive}) => `md:block hidden text-center py-2 px-4 transition ${isActive ?"bg-amber-50 text-black font-semibold":"text-gray-600"}`} >
        <p className="md:block hidden pt-4 px-10 ">{item.name}</p>
       </NavLink> 
      ))}
    </div>
  )
}

export default SideNavbar
