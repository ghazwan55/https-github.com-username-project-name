import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.png"
import { UserButton } from '@clerk/clerk-react'
function Navbardas() {
  return (
    <div className="flex justify-between items-center px-7 border-b border-gray-500 bg-white py-3 transition-all">
      <Link to={"/"}>
      <img src={Logo} className="h-30 invert opacity-80"/>
      </Link>
      <UserButton/>
    </div>
  )
}

export default Navbardas
