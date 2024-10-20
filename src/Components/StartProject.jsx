import React, {useState, useEffect} from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function StartProject() {
  const [islogined, setislogined] =useState(false)
  const [email, setemail] = useState("")
  const navigate = useNavigate();
 

  
  useEffect(() => {
   const preload = async()=> {
    const localuseremail = localStorage.getItem('useremail')
    if(!localuseremail){
      navigate('/login')
    }else{
      const currentUser = await axios.get(`http://localhost:3000/afterlogin/${localuseremail}`);
      const currentUserData = currentUser.data.user
      setemail(currentUserData.email);
      setislogined(currentUserData.islogedin)
    }
   }
   preload();
   
  },[]);

  console.log(islogined,email);
  
  return (
    <div className='projectpage'>
      <div>
        <Navbar/>
      </div>

      <div className='projectpagebody'>

      </div>

      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default StartProject

