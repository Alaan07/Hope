import React from 'react'
import Navbar from './Navbar.jsx'

function Homepage() {
  return (
    <div className='wholehome'>
      <div>
        <Navbar/>
      </div>
      <div className='homePageBody'>
        <div className="bodylayout">
          <div className='homeHeading'>
            <h1 className='homeMainheading'>Bring a creative project to life with Hope.</h1>
            <section className='homeSubheading'>Make a wonderfull video  prototype, and post in your project and hope the people love your project and support by backing your project with hope.</section>
          </div>

          <div className="tillNow">
             <div><p className='tillNowTableheading'>On HOPE : </p></div>
             <div className='tablediv'>
              <table className="tillNowTable">
                      <tr className='tablerowmain'>
                        <td className='tablecontents'>
                          <tr>
                            <td className='tableData totalProjects'>264,422</td>
                          </tr>
                          <tr>
                            <td className='tableTittle'>Total Projects</td>
                          </tr>
                        </td>

                        <td className='tablecontents'>
                          <tr>
                            <td className='tableData totalAmount'>₨.264,422</td>
                          </tr>
                          <tr>
                            <td className='tableTittle'>Total Amount supported</td>
                          </tr>
                        </td>

                        <td className='tablecontents tllast'>
                          <tr>
                            <td className='tableData totalSupporters'>264,422</td>
                          </tr>
                          <tr>
                            <td className='tableTittle'>Total supporters</td>
                          </tr>
                        </td>
                      </tr>
              </table>
             </div>

          </div>
        </div>
      </div>
    </div>
  )
}


export default Homepage
