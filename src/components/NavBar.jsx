import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>
        Hammer Chat
      </span>
        <div className='user'>
          <img src="" alt="" />
          <span>Victor</span>
          <button>Logout</button>
        </div>
    </div>
  )
}

export default NavBar