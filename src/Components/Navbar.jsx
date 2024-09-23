import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import Itachi from '../assets/image/itachi.jpg'




function Navbar() {

 const [islogined, setislogined] =useState(false)
 const [email, setemail] = useState("")
 const location = useLocation();
  
  useEffect(() => {
   const preload = async()=> {
    setislogined(location.state.logedin);
    setemail(location.state.homeemail);
      console.log(email + "email nav")
      console.log(islogined + " islogined nav");
   }
   preload();
  },[islogined],[email]);


  const navigate = useNavigate();

  const startprojectclick = () =>{
    navigate('#')
  }
  const loginclick = () =>{
    navigate('/login')
  }
  const handellogout = () =>{
    navigate('/')
    window.location.reload();
  }
  const profilemenuhandleclick = () =>{
    document.querySelector('.profilemenu').style.display = "block";
    document.querySelector('.outerclickhanderler').style.display = "block"
  }
  const outterclick = () => {
    document.querySelector('.profilemenu').style.display = "none";
    document.querySelector('.outerclickhanderler').style.display = "none"
  }


  return (
    <div className='navbar'>
      <div className='top-nav'>
            <div className='logo'>
                <h2 className='logoh2'>HOPE</h2>
            </div>
            <div className='searchBar'>
                <button className='searchIcon'><FaSearch className='fasearch_icon'/></button>
                <input className='searchInput'  type="text" placeholder='Search projects, Creators and Categories' />
            </div>
            <div className='startAndLogin'>
                <button onClick={startprojectclick} className='btn'><Link className='navstartProject' >Start project</Link></button>

                {
                  islogined ? 
                    (<div className='navdp'>
                      <div className='navprofiledp' onClick={profilemenuhandleclick}> 
                      <p className='dpname'>{islogined && (email.substring(0, 3))}</p>
                      </div>
                      <div className='profilemenu'>
                          <ul>
                            <li><Link className='profilemenuitem'> Profile </Link></li>
                            <li><Link className='profilemenuitem'> Messages </Link></li>
                            <li><Link className='profilemenuitem'> Settings </Link></li>
                            <li><Link className='profilemenuitem'> Projects </Link></li>
                          </ul>
                         <button className = "logoutbtn" onClick={handellogout}>Logout</button>
                      </div>
                      <div className='outerclickhanderler' onClick={outterclick}></div>
                    </div>) : (<button onClick={loginclick} className='btn'><Link className='navLoginlink'>Login</Link></button>)
                }
                
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
