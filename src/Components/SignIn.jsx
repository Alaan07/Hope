import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaBackward, FaInstagram, FaGoogle, FaTwitter } from "react-icons/fa";
import axios from "axios";

function SignIn() {   
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const handleregisterclick = async(e)=>{
    if(password === confirmpassword){
       var userName = username.trim();
       var Email = email.replaceAll(" ", "").toLowerCase().trim();
        try{
          e.preventDefault();
          const registerData = await axios.post('http://localhost:3000/registeruser', {userName, Email, password, confirmpassword});
          console.log(registerData.data.data);
        }catch(err){
          console.log(err);
        }
    alert("register successfull."); 
    }
    else{
      alert("register unsuccessfull!! due to password not matching.");
    }
    setusername("");
    setemail("");
    setpassword("");
    setconfirmpassword("");
  }

  return (
    <div>
      <div className="registercontainer">
        <div className="registerfirstbox">
          <div className="registerMainpart">
            <div className="registerheading">
              <h1 className="registertitle">Register</h1>
            </div>
            <div className="registerformdiv">
              <form className="registerform">
                <input className="registerusename" type="text" placeholder="Username" value={username} onChange={(e)=>setusername(e.target.value)}/>
                <input className="registeremail" type="text" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <input className="registerpassword" type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <input className="registerconfirmpassword" type="password" placeholder="Confirm Password"  value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)}/>
                <button
                  className="registerbtn" onClick={handleregisterclick}> Sign In
                </button>
              </form>

              <div className="continuepart">
                <p className="contiptag">
                  or <span className="continuetxt">Continue</span> with
                </p>

                <div className="registericondiv">
                  <Link className="registergoogleicon">
                    <FaGoogle/>
                  </Link>
                  <Link className="registertwittericon">
                    <FaTwitter/>
                  </Link>
                  <Link className="registerinstagramicon">
                    <FaInstagram/>
                  </Link>
                </div>

                <p className="redirecttologin">
                  Aldready have an acount?
                  <Link to="/login" className="registertologinlink">
                    Log In
                  </Link>
                </p>
                <p className="registerTandCpart">
                  By clicking the above login, you agree to our
                  <span className="registerunderline">Terms & Tonditions.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="registerSidepart">
            <h1 className="backarrow">
              <Link to="/">
                <FaBackward/>
              </Link>
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            quisquam, amet quia expedita molestiae praesentium sint hic quaerat
            id, explicabo recusandae debitis cumque officia libero ex maiores,
            voluptates saepe quae veritatis aliquam dolor numquam. Aperiam,
            ipsum, corporis, officia neque nemo natus asperiores dolor at
            reprehenderit doloremque fugiat odio recusandae! Esse?
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
