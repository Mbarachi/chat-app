import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>
        Hammer Chat
      </span>
        <div className='user'>
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQE7VCTojWrTgA/profile-displayphoto-shrink_400_400/0/1617028820663?e=1672272000&v=beta&t=rSXIxNpAeXrrXM_g33B5cucnndqEdWEMD4RlU4WMeq8" alt="" />
          <span>Victor</span>
          <button>Logout</button>
        </div>
    </div>
  )
}

export default NavBar