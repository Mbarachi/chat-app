import React from 'react'
import NavBar from '../components/NavBar'
import Search from '../components/Search'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <NavBar/>
      <Search/>
    </div>
  )
}

export default Sidebar