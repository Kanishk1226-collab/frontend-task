import React from 'react'
import './MainArea.css'
import {MdHistory, MdHome, MdPlaylistPlay, MdRssFeed, MdVideoLibrary, MdWatchLater} from 'react-icons/md'
import { FaFutbol, FaGripfire, FaMusic, FaNewspaper } from 'react-icons/fa'
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import {GiGamepad} from 'react-icons/gi'

import ReactPlayer from 'react-player'
function MainArea(){
    return(
        <div className="MainArea">
            <div className="Sidebar">
                <div className="Home">
                    <div className="Quick_Icon">
                        <MdHome color="red"fontSize="3rem"/>
                        <div>Home</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaGripfire color="grey"fontSize="3rem"/>
                        <div>Trending</div>
                    </div>
                    <div className="Quick_Icon">
                        <BsFillCollectionPlayFill color="grey"fontSize="3rem"/>
                        <div>Subscriptions</div>
                    </div>
                </div>
                <div className="Library">
                    
                    <div className="Quick_Icon">
                        <MdVideoLibrary color="grey"fontSize="3rem"/>
                        <div>Video Library</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdHistory color="grey"fontSize="3rem"/>
                        <div>History</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdWatchLater color="grey"fontSize="3rem"/>
                        <div>Watch Later</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdPlaylistPlay color="grey"fontSize="3rem"/>
                        <div>Youtube Clone</div>
                    </div>
                    </div>
                    <div className="More_From_Youtube">
                    <div className="Quick_Icon">
                        <GiGamepad color="grey"fontSize="3rem"/>
                        <div>Gaming</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdRssFeed color="grey"fontSize="3rem"/>
                        <div>Live</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaFutbol color="grey"fontSize="3rem"/>
                        <div>Sports</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaMusic color="grey"fontSize="3rem"/>
                        <div>Music</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaNewspaper color="grey"fontSize="3rem"/>
                        <div>News</div>
                    </div>

                </div>
            </div>



            <div className="Main">     
                 <div className="Videos"> 
                    <div id="Description">
                    <h2>....................SPORTS....................</h2>
                    <p>CHANNEL NAME : LIVERPOOL</p>
                    <p>SUBSCRIBERS : 4 MILLION</p>
                    <p>DESCRIPTION :</p>
                    <p>Passionate about Liverpool FC? Well, you're in the  <br/> right place
          with new and exclusive uploads bringing  <br/> you closer to the   
Premier League and World <br/> Champions, every week.</p>
                    </div>
                    <div className="Video">
                        <ReactPlayer
                        url="https://www.youtube.com/watch?v=E7czNHN47zc"
                        height="170px"
                        width="280px"
                        controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/soccer.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                            <div>Inside Training: Shooting practice, five-a-side & head tennis</div>
                        </div>
                        <br></br>
                        <div className="view">
                        450,628 views •Premiered Mar 14, 2021
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer
                        url="https://www.youtube.com/watch?v=udbAtbQ4aVw"
                        height="170px"
                        width="280px"
                        controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/soccer.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                            <div>Highlights: Liverpool 0-1 Fulham | First-half goal the difference at Anfield</div>
                        </div>
                        <br></br>
                        <div className="view">
                        684,809 views•Mar 8, 2021
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer
                        url="https://www.youtube.com/watch?v=bqgWivU4aQ0"
                        height="170px"
                        width="280px"
                        controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/soccer.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                            <div>Liverpool's Front Three: 3 years of Mane, Firmino and Salah</div>
                        </div>
                        <br></br>
                        <div className="view">
                        450,628 views •Premiered Mar 14, 2021
                        </div>
                    </div>

                   
                
            </div>
            <br/> <br/>

            <div className="Videos">
            <div id="Description1">
                    <h2>......................NEWS......................</h2>
                    <p>CHANNEL NAME : BBC NEWS</p>
                    <p>SUBSCRIBERS : 9.47 MILLION</p>
                    <p>DESCRIPTION :</p>
                    <p>The official BBC News YouTube channel is <br/> 
                    operated by BBC Global News Ltd which comprises <br/> 
                    BBC World News the 24hr TV channel and <br/>  
                    bbc.com/news, the international news website.</p>
                    </div>
                    <div className="Video">
                        <ReactPlayer
                        url="https://www.youtube.com/watch?v=kyQwK3rPd1o"
                        height="170px"
                        width="280px"
                        controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/bbc.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                            <div>Minute's silence held on lockdown anniversary for UK Covid deaths - BBC</div>
                        </div>
                        <br></br>
                        <div className="view">
                        85,875 views•Mar 23, 2021
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer
                        url="https://www.youtube.com/watch?v=ZSBFXuPylHg"
                        height="170px"
                        width="280px"
                        controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/bbc.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                            <div>The Indian factory making 6,000 syringes a minute - BBC News</div>
                        </div>
                        <br></br>
                        <div className="view">
                        75,558 views•Mar 21, 2021
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer
                        url="https://www.youtube.com/watch?v=sFFzOq0Z0Fc"
                        height="170px"
                        width="280px"
                        controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/bbc.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                            <div>Why is everyone fighting over the South China Sea? - BBC News</div>
                        </div>
                        <br></br>
                        <div className="view">
                        92,718 views•Mar 20, 2021
                        </div>
                    </div>
            </div>
            <br/> <br/>

            


            <div className="Videos">
            <div id="Description2">
                    <h2>....................TESLA....................</h2>
                    <p>CHANNEL NAME : TESLA</p>
                    <p>SUBSCRIBERS : 1.9 MILLION</p>
                    <p>DESCRIPTION :</p>
                    <p>Electric cars, giant batteries and solar. <br/>
                     Tesla’s mission is to accelerate the <br/>
                    world’s transition to sustainable energy.</p>
                    </div>
                    <div className="Video">
                        <ReactPlayer
                        url="https://www.youtube.com/watch?v=ijcAwrWMi0g"
                        height="170px"
                        width="280px"
                        controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/tesla.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                            <div>Model Y Deliveries Begin!
                            <br/> <br/> <br/>
                            </div>
                        </div>
                        <br></br>
                        <div className="view">
                        1,118,934 views•Mar 16, 2020
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer
                        url="https://www.youtube.com/watch?v=J2U9Hmmpqhc"
                        height="170px"
                        width="280px"
                        controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/tesla.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                            <div>Cybertruck
                                <br/> <br/> <br/>
                            </div>
                        </div>
                        <br></br>
                        <div className="view">
                        4,478,483 views•Nov 24, 2019
                        </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer
                        url="https://www.youtube.com/watch?v=zB8_HbrxUi8"
                        height="170px"
                        width="280px"
                        controls/>
                        <br></br>
                        <div className="Logo">
                            <img src="/images/tesla.jpg"alt="React"style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                            <div>Making Batteries
                            <br/> <br/> <br/>
                            </div>
                        </div>
                        <br></br>
                        <div className="view">
                        2,191,207 views•Jan 18, 2021
                        </div>
                    </div>
            </div>


        </div>
        </div>
    )
}
export default MainArea