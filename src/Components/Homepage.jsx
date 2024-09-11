import React from 'react'
import { Link } from 'react-router-dom'
import HopeImage from '../assets/image/hope2.png'
import Itachi from '../assets/image/itachi.jpg'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { FaBookmark, FaHeart } from 'react-icons/fa'
import VideoFile from '../assets/video/solo.mp4'


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
              <tbody>
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
                      </tbody>
              </table>
             </div>
          </div>

          <div className='newProjects'>
              <div className='featuredProjects'>
                <div className='featuredHeading'>
                  <h3 className='featuredTitle'> FEATURED PROJECTS</h3>
                </div>
                <div className='thumnaildiv'>
                    <video className='previewVideo' controls muted autoPlay >
                        <source src={VideoFile} type='video/mp4'/>
                      error loading
                    </video>
                </div>
                <div className='projectData'>
                  <div className='dpblock'>
                    <div className='projectdp'>
                      <img className='profiledp' src={Itachi} alt="bla" />
                    </div>
                  </div>
                  <div className='projectDetails'>
                    <h3 className='projectTitle'> <FaHeart/> the best board game</h3>
                    <p className='projectName'> BoardGames</p>
                    <p  className='timeAndfunding'>clock icon, days left, dot 234%funded</p>
                    <section className='projectDiscription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum, nisi pariatur at possimus minima.</section>
                    <div className='categoryAndlocation'>
                        <button>Games</button>
                        <button>karnataka, bangalore</button>
                    </div>
                  </div>
                  <div className='bookmarkicon'>
                    <FaBookmark/>
                  </div>
                </div>
              </div>


              <div className='recommendedProjects'>
                <div className='recommendedHeading'>
                  <h3 className='recommendedTitle'> RECOMMENDED PROJECTS</h3>
                </div>
                <div className='toprow'>
                  <div className='card1 card'>

                        <div className='thumnaildiv'>
                          <video className='previewVideo' controls muted  >
                              <source src={VideoFile} type='video/mp4'/>
                            error loading
                          </video>
                      </div>
                      <div className='projectData'>
                        <div className='dpblock'>
                          <div className='projectdp'>
                            <img className='profiledp' src={Itachi} alt="bla" />
                          </div>
                        </div>
                        <div className='projectDetails'>
                          <h3 className='projectTitle'> <FaHeart/> the best board game</h3>
                          <p className='projectName'> BoardGames</p>
                          <p  className='timeAndfunding'>clock icon, days left, dot 234%funded</p>
                          <section className='projectDiscription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum, nisi pariatur at possimus minima.</section>
                          <div className='categoryAndlocation'>
                              <button>Games</button>
                              <button>karnataka, bangalore</button>
                          </div>
                        </div>
                        <div className='bookmarkicon'>
                          <FaBookmark/>
                        </div>
                      </div>

                  </div>

                  <div className='card2 card'>

                      <div className='thumnaildiv'>
                          <video className='previewVideo' controls muted  >
                              <source src={VideoFile} type='video/mp4'/>
                            error loading
                          </video>
                      </div>
                      <div className='projectData'>
                        <div className='dpblock'>
                          <div className='projectdp'>
                            <img className='profiledp' src={Itachi} alt="bla" />
                          </div>
                        </div>
                        <div className='projectDetails'>
                          <h3 className='projectTitle'> <FaHeart/> the best board game</h3>
                          <p className='projectName'> BoardGames</p>
                          <p  className='timeAndfunding'>clock icon, days left, dot 234%funded</p>
                          <section className='projectDiscription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum, nisi pariatur at possimus minima.</section>
                          <div className='categoryAndlocation'>
                              <button>Games</button>
                              <button>karnataka, bangalore</button>
                          </div>
                        </div>
                        <div className='bookmarkicon'>
                          <FaBookmark/>
                        </div>
                      </div>
                    
                  </div>
                </div>
                <div className='bottomrow'>
                  <div className='card3 card'>

                     <div className='thumnaildiv'>
                          <video className='previewVideo' controls muted  >
                              <source src={VideoFile} type='video/mp4'/>
                            error loading
                          </video>
                      </div>
                      <div className='projectData'>
                        <div className='dpblock'>
                          <div className='projectdp'>
                            <img className='profiledp' src={Itachi} alt="bla" />
                          </div>
                        </div>
                        <div className='projectDetails'>
                          <h3 className='projectTitle'> <FaHeart/> the best board game</h3>
                          <p className='projectName'> BoardGames</p>
                          <p  className='timeAndfunding'>clock icon, days left, dot 234%funded</p>
                          <section className='projectDiscription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum, nisi pariatur at possimus minima.</section>
                          <div className='categoryAndlocation'>
                              <button>Games</button>
                              <button>karnataka, bangalore</button>
                          </div>
                        </div>
                        <div className='bookmarkicon'>
                          <FaBookmark/>
                        </div>
                      </div>

                  </div>
                  <div className='card4 card'>

                    <div className='thumnaildiv'>
                          <video className='previewVideo' controls muted  >
                              <source src={VideoFile} type='video/mp4'/>
                            error loading
                          </video>
                      </div>
                      <div className='projectData'>
                        <div className='dpblock'>
                          <div className='projectdp'>
                            <img className='profiledp' src={Itachi} alt="bla" />
                          </div>
                        </div>
                        <div className='projectDetails'>
                          <h3 className='projectTitle'> <FaHeart/> the best board game</h3>
                          <p className='projectName'> BoardGames</p>
                          <p  className='timeAndfunding'>clock icon, days left, dot 234%funded</p>
                          <section className='projectDiscription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum, nisi pariatur at possimus minima.</section>
                          <div className='categoryAndlocation'>
                              <button>Games</button>
                              <button>karnataka, bangalore</button>
                          </div>
                        </div>
                        <div className='bookmarkicon'>
                          <FaBookmark/>
                        </div>
                      </div>
                    
                  </div>
                </div>

                <div className='pages'>
                <p>1 2 3 4</p>
                </div>

              </div>
          </div>

          <div className='newsANDevents'>
                <div className='newsbanner'>
                  <img className='hopebanner' src={HopeImage} alt="Hopebanner" />
                </div>
                <div className='newsupdates'>
                  <h3 className='newsANDeventsheading'> Project Updates Blog</h3>
                  <section className='newsANDeventsdetails'>
                      A destination for company news, creator tips, project inspiration, and home to product updates sharing everything you need to know about what's happening at HOPE.
                  </section>
                  <Link className='newsReadmore' to="#">Read more</Link>
                </div>
          </div>

          <div className='recentProjects'>
              <div className='recentprojectsHeading'>
                  <h3 className='recentProjectsTitle'> NEW PROJECTS</h3>
              </div>

          </div>
          <div className='takingoff'>
              <div className='takingoffHeading'>
                  <h3 className='takingoffTitle'> TAKING OFF</h3>
              </div>

          </div>




        </div>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default Homepage
