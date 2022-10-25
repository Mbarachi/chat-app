import React from 'react'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import Chats from '../components/Chats'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <NavBar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar