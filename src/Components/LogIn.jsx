import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBackward, FaInstagram, FaGoogle, FaTwitter } from "react-icons/fa";
import axios from "axios";

function LogIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const updatedEmail = email.replaceAll(" ", "").toLowerCase().trim();
  const handleloginClick = async(e) => {
    if((email === '') || (password === '')){
      alert("fill all the fields")
    }else{
      try{
        e.preventDefault();
        const logindata = await axios.get(`http://localhost:3000/login/${updatedEmail}/${password}`);
        if(logindata.data.notfound){
          alert("not found please register first")
        }else if(logindata.data.isloginSuccesfull){
          localStorage.setItem('useremail', updatedEmail)
          alert("login successfull")
          navigate('/'
          // {state:{homeemail: updatedEmail, logedin:true}}
        );
        }else{
          alert("login not successfull!! due to wrong credentials ")
        }
      }catch(err){
        console.log(err)
      }
    }
  };


  return (
    <div className="logincontainer">
      <div className="loginfirstbox">
        <div className="LoginSidepart">
          <h1 className="backarrow">
            <Link to="/">
              <FaBackward/>
            </Link>
          </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          quisquam, amet quia expedita molestiae praesentium sint hic quaerat
          id, explicabo recusandae debitis cumque officia libero ex maiores,
          voluptates saepe quae veritatis aliquam dolor numquam. Aperiam, ipsum,
          corporis, officia neque nemo natus asperiores dolor at reprehenderit
          doloremque fugiat odio recusandae! Esse?
        </div>
        <div className="LoginMainpart">
          <div className="loginheading">
            <h1 className="logintitle">Login</h1>
          </div>
          <div className="loginformdiv">
            <form className="loginform" >
              <input className="loginemail" type="text" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
              <input className="loginpassword" type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
              <button className="loginbtn" onClick={handleloginClick}>
                Log in
              </button>
            </form>


            <div className="forgotpassword">
              <p>
                <Link className="forgotpasswordlink">
                  Forgot your password?
                </Link>
              </p>
            </div>

            <div className="continuepart">
              <p className="contiptag">
                or <span className="continuetxt">Continue</span> with
              </p>

              <div className="loginicondiv">
                <Link className="logingoogleicon">
                  <FaGoogle/>
                </Link>
                <Link className="logintwittericon">
                  <FaTwitter/>
                </Link>
                <Link className="logininstagramicon">
                  <FaInstagram/>
                </Link>
              </div>

              <p className="redirecttosignin">
                Don't have an account yet?
                <Link className='logintosiginlink' to="/signin">
                  Sign up
                </Link>
              </p>
              <p className="loginTandCpart">
                By clicking the above login, you agree to our{" "}
                <span className="loginunderline">Terms & Tonditions.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
