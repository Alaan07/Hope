import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footercontainer'>
        <div className='catog'>
            <ul className='catlist'>
                <li className='item '><Link className='footerlinks'>Art</Link></li>
                <li className='item '><Link className='footerlinks'>Comics & Illustration</Link></li>
                <li className='item '><Link className='footerlinks'>Design & Tech</Link></li>
                <li className='item '><Link className='footerlinks'>Film</Link></li>
                <li className='item '><Link className='footerlinks'>Food & Craft</Link></li>
                <li className='item '><Link className='footerlinks'>Games</Link></li>
                <li className='item '><Link className='footerlinks'>Music</Link></li>
                <li className='item '><Link className='footerlinks'>Publishing</Link></li>
            </ul>

        </div>
        <div className="underlinediv"></div>
        <div className='footercenter'>
            <div className='about'>
              <h4>ABOUT</h4>
              <ul>
                <li className='item '><Link className='footerlinks'>About us</Link></li>
                <li className='item '><Link className='footerlinks'>Our charter</Link></li>
                <li className='item '><Link className='footerlinks'>stats</Link></li>
                <li className='item '><Link className='footerlinks'>press</Link></li>
                <li className='item '><Link className='footerlinks'>jobs</Link></li>
              </ul>
            </div>
            <div className='support'>
              <h4>SUPPORT</h4>
              <ul>
                <li className='item '><Link className='footerlinks'>Help Center</Link></li>
                <li className='item '><Link className='footerlinks'>Our Rules</Link></li>
                <li className='item '><Link className='footerlinks'>Creator Resources</Link></li>
                <li className='item '><Link className='footerlinks'>Forward Funds</Link></li>
                <li className='item '><Link className='footerlinks'>Brand assets</Link></li>
              </ul>

            </div>
            <div className='morefromHope'>
              <h4>MORE FROM</h4>
              <ul>
                <li className='item '><Link className='footerlinks'>Newsletters</Link></li>
                <li className='item '><Link className='footerlinks'>Hope Project Updates</Link></li>
                <li className='item '><Link className='footerlinks'>The Creative Independent</Link></li>
                <li className='item '><Link className='footerlinks'>Mobile apps</Link></li>
                <li className='item '><Link className='footerlinks'>Research</Link></li>
              </ul>
            </div>

        </div>
        <div className='CopyrightANDfootersociallinks'>
            <div className='copyright'> 
                <p><span className='H'>H</span> Hope, IND &copy; 2024</p>
            </div>
            <div className='linksAndbuttons'>
                <div className='sociallinksdiv'>
                  <ul className='sociallinks'>
                    <li className='item '><Link className='footerlinks'><FaFacebook className='footericon'/></Link></li>
                    <li className='item '><Link className='footerlinks'><FaInstagram className='footericon'/></Link></li>
                    <li className='item '><Link className='footerlinks'><FaTwitter className='footericon'/></Link></li>
                    <li className='item '><Link className='footerlinks'><FaYoutube className='footericon'/></Link></li>
                  </ul>
                </div>

                <div className='langANDcurrencybuttons'>
                    <button className='languagebtn'>
                      <select name="language" id="langbtn" className='languageselect'>
                        <option value="english"> English</option>
                        <option value="hindi"> Hindi</option>
                        <option value="kannada"> Kannada</option>
                        <option value="bengali"> Bengali</option>
                        <option value="tamil"> Tamil</option>
                        <option value="telugu"> Telugu</option>
                      </select>
                    </button>
                    <button className='currencybtn'>
                      <select name="currency" id="currenbtn" className='currencyselect'>
                        <option value="IND"> ₹ Rupee (IND)</option>
                        <option value="USD"> $ US Dollar(USD)</option>
                        <option value="AUD"> $ Australian Dollar (AUD)</option>
                        <option value="CAD"> $ Canadian Dollar (CAD)</option>
                        <option value="JPY"> ¥ Japanese Yen (JPY)</option>
                        <option value="GBP"> £ Pound Sterling (GBP)</option>
                        <option value="MXN"> $ Mexican peso (MXN)</option>
                      </select>
                    </button>
                </div>

            </div>

        </div>

        <div className="underlinediv"></div>
        <div className='TermANDconditions'>
            <ul className='tANDc'>
                <li className='item '><Link className='footerlinks'>Trust & Safety</Link></li>
                <li className='item '><Link className='footerlinks'>Terms of Use</Link></li>
                <li className='item '><Link className='footerlinks'>Privacy Policy</Link></li>
                <li className='item '><Link className='footerlinks'>Cookie Policy</Link></li>
                <li className='item '><Link className='footerlinks'>Cookie Preferences</Link></li>
                <li className='item '><Link className='footerlinks'>Accessibility Statement</Link></li>
                <li className='item '><Link className='footerlinks'>CA Notice of Consent</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
