import React, { useState } from 'react';
import bg from '../Images/Tokenomics.png'
import { Col, Container, Row, Button } from "react-bootstrap";
import games from '../Images/games.png';
import Frame from '../Images/Framegraph.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tokenomics = () => {



   const [bar, setBar] = useState(0);





   React.useEffect(()=>{
      AOS.init();
   })


   return (
      <>
         <div className='container'
         id='tokenomics'
         >
          <p
          data-aos="fade-zoom-in"
          data-aos-delay="200"
          data-aos-offset="0"
          style={{color:"white"}}
          className="header-tokenomics text-center">
            TOKENOMICS
          </p>  

    <Container  
                  data-aos="fade-up"
                  data-aos-delay="300"	
                   data-aos-offset="130"
                   data-aos-duration="1000">
         <Row>
            <Col lg={3}>    
               <div style={{textAlign:"center", marginTop:"30px", backgroundImage: "linear-gradient(rgba(23,212,21,0.16) , rgba(7,73,78,0.18)",paddingBottom:"2rem", paddingTop:"2.5rem", borderRadius:"10px"}}
               className="token-box">
                  <div>
                     <img src={games} alt="abc"/> 
                  </div>
                  <div>
                     <p style={{color: "white" , fontSize:"2rem",marginBottom:"0rem"}} className="aaa">116</p>
                     <p style={{color: "white" , fontSize:"2rem"}} className="aaa">MILLION</p>
                  </div>
               </div>
            </Col>

            <Col lg={9}>
               <div className='token-para'>
                  <div>
                     <p></p>
                     <p style={{color:"white"}} className="tok-para">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                  <div>
                     <p></p>
                     <p  style={{color:"white"}} className="tok-para">Lorem ipsum dolor olor sit ame sit amet consectetur</p>
                  </div>
                  <div>
                     <p></p>
                     <p  style={{color:"white"}} className="tok-para">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                  <div>
                     <p></p>
                     <p  style={{color:"white"}} className="tok-para">Lorem ipsum dolor sit amet olor sit ameconsectetur olor sit ame</p>
                  </div>
               </div>
             </Col>
            </Row>

            <div>
               <p style={{color:"white", marginTop:"30px"}} className="tk-para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem esse doloribus ea neque est vitae eligendi minus, adipisci doloremque sunt quas dolore dolor provident blanditiis nostrum veritatis, illo nisi aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maiores qui porro aut neque quibusdam maxime! Aperiam minus error ut inventore, ipsa corrupti, fugiat natus suscipit a, assumenda qui illo.
               </p>
            </div>


         <Row>
            <Col sm={12} md={6} lg={6}>
               <div style={{marginTop:"10px"}}>
                  <div className='paras'>
                     <p style={{color:"white"}}>Storm</p>
                     <p style={{color:"white"}}>44%</p>
                  </div>   
                  <ProgressBar className='first-progress' style={{borderRadius:"2rem"}} variant="" now={44} />
               </div>
               <div style={{marginTop:"10px"}}>
                  <div className='paras'>
                     <p style={{color:"white"}}>Thunder</p>
                     <p style={{color:"white"}}>25%</p>
                  </div>   
                  <ProgressBar className='second-progress' style={{borderRadius:"2rem"}}  variant="" now={44} />
               </div>
               <div style={{marginTop:"10px"}}>
                  <div className='paras'>
                     <p style={{color:"white"}}>Storm</p>
                     <p style={{color:"white"}}>20%</p>
                  </div>   
                  <ProgressBar className='third-progress' style={{borderRadius:"2rem"}} variant="" now={20} />
               </div>
               <div style={{marginTop:"10px"}}>
                  <div className='paras'>
                     <p style={{color:"white"}}>Lightening</p>
                     <p style={{color:"white"}}>10%</p>
                  </div>   
                  <ProgressBar className='four-progress' style={{borderRadius:"2rem"}} variant="" now={10} />
               </div>
               <div style={{marginTop:"10px"}}>
                  <div className='paras'>
                     <p style={{color:"white"}}>Tornadoes</p>
                     <p style={{color:"white"}}>6%</p>
                  </div>   
                  <ProgressBar className='fifth-progress' style={{borderRadius:"2rem"}} variant="" now={6} />
               </div>
            </Col>
            <Col sm={12} md={6} lg={6} className="token-graph">
               <div>
                  <img src={Frame} alt="abc" style={{height:"290px",
                  //  padding:"0px 60px",
                    marginTop:"25px" }} className="tk-img"/>
               </div>
            </Col>
         </Row>

          </Container>  
         </div>
      </>
   );
}

export default Tokenomics;