import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='top-nav'>
            <div className='logo'>
                <h2 className='logoh2'>HOPE</h2>
            </div>
            <div className='searchBar'>
                <button className='searchIcon'>search</button>
                <input className='searchInput'  type="text" placeholder='Search projects, Creators and Categories' />
            </div>
            <div className='startAndLogin'>
                <button className='btn startProject'>Start a project</button>
                <button className='btn Login'>Login</button>
            </div>
      </div>
      <div className='category'>
            <ul className='categoryList'>
                <li>Art</li>
                <li>Comics</li>
                <li>Design</li>
                <li>Film</li>
                <li>Games</li>
                <li>Publishing</li>
                <li>Technology</li>
                <li>Music</li>
                <li>Food</li>
            </ul>
      </div>
    </div>
  )
}

export default Navbar