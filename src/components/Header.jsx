import React from 'react'
import CenterMenu from './CenterMenu'

const Header = () => {
  return (
    <header className='header bg-[#081730] flex'>
        <img src={require("../img/MuzicLogo.png")} alt="app logo" />
        <CenterMenu />
        <div className="buttons">
            <button>Sign Up</button>
            <button>Log In</button>
        </div>
    </header>
  )
}

export default Header