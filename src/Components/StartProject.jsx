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

      <div className='projectpagebody homePageBody'>
      <div className='projectpagelayout bodylayout'>
          <div className="projectpageheader">
            <h1 className='projectpagehead homeHeading'>
              Bring your <br /><span className='projectcaptcha'>DREAMS</span>, <span className='projectcaptcha'>CREATIVITY</span>, <span className='projectcaptcha'>HOPE</span> <br /> to life
            </h1>
            <button className='proectstartbtn'>Start Project</button>
          </div>
        </div>
      </div>

        <div className="projectpagebannner">
        <div className="bannerdiv">
        <div className='fillerdiv'>
          <p className='bannerP'>"We see Hope as a home for creative minds and a wonderful platform: where people who belive, respect, and see the vision can support an indea and make it a reality."
          <br />
          <br />
          <span className='bannerauther'>- Madara</span>
          </p>
          </div>
        </div>    
        </div>


      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default StartProject

