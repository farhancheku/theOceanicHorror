import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Wave from "react-wavify";
import footer from '../Images/Footerbg.png';
import footerlogo from '../Images/FooterLogo.png';
// import { Icon } from '@iconify/react';
import frame1 from '../Images/Frame1.png'
import frame2 from '../Images/Frame2.png'
import frame3 from '../Images/Frame3.png'




const Footer = () => {
  return (
      <>
         <div
            className="footer-img"
            style={{
            backgroundImage: `url(${footer})`,   
            height:"100vh",
            width:"100%",
            position: "relative",
            overflow:"hidden"
         }}
            >  
            <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              bottom: "0",
              height: "100vh",
              display: "flex",
              zIndex: "1",
              transform: "rotate(360deg)",
            }}
          >
            <Wave
              fill="#17D4C9"
              paused={false}
              options={{
                height: 150,
                amplitude: 45,
                speed: 0.35,
                points: 3,
                opacity: 0.3
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              bottom: "0",
              height: "90vh",
              display: "flex",
              zIndex: "1",
              transform: "rotate(360deg)",
            }}
          >
            <Wave
              fill="#17D4C9"
              paused={false}
              options={{
                height: 150,
                amplitude: 40,
                speed: 0.25,
                points: 3,
                opacity:0.2
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              bottom: "0",
              height: "90vh",
              display: "flex",
              zIndex: "1",
              transform: "rotate(360deg)",
            }}
          >
            <Wave
              fill="#17D4C9"
              paused={false}
              options={{
                height: 150,
                amplitude:35,
                speed: 0.15,
                points: 4,
                opacity:0.1
              }}
            />
          </div>         
          <Container>
              <Row style={{position:"absolute", zIndex:"100", marginRight:"20px"}}>
                  <Col sm={12} md={12} lg={12}>
                     <div className="foot-div w-100 text-center">
                        <img src={footerlogo} alt="abc" className="footer-img"/>
                     </div>
                  </Col>
                  <Col sm={2} md={12} lg={12}>
                        <Row className="text-center footer-main">
                           <Col sm={2}>
                              <a className="footer-link" href="#">OUR AGENTS</a>
                           </Col>
                           <Col sm={2}>
                              <a className="footer-link" href="#">MINT</a>
                           </Col>   
                           <Col sm={2}>   
                              <a className="footer-link" href="#">NFT UTILITIES</a>
                           </Col>
                           <Col sm={2}>
                              <a className="footer-link" href="#">ROADMAP</a>
                           </Col>
                           <Col sm={2}>   
                              <a className="footer-link" href="#">FAQ'S</a>
                           </Col>
                           <Col sm={2}>   
                              <a className="footer-link" href="#">OUR TEAM</a>
                           </Col>
                        </Row>
                  </Col>
                  <Row>
                  <Col lg={12} sm={12} md={12}>
                     <Row>
                           <div className='d-flex justify-content-center footer-icons'>
                              <div className='icon'>
                                 <a
                                 href="#" target="_blank">
                                    <img src={frame1} alt="abc"/>
                                 </a>
                              </div>
                              <div className='icon'>
                              <a
                                 href="#" target="_blank">
                                    <img src={frame2} alt="abc"/>
                                 </a>
                              </div>
                              <div className='icon'>
                              <a
                                 href="#" target="_blank">
                                    <img src={frame3} alt="abc"/>
                                 </a>
                              </div>
                           </div>
                     </Row>
                  </Col>
                  <Col lg={12} sm={12} md={12} className="footer-bottom">
                     {/* <Row className="text-center justify-content-center align-items-center"> */}
                        <div>
                           <p className="footer-fipara" style={{color:"#fff"}}>Copyright &copy; 2022. The Oceanic Horrors. All Rights Reserved.</p>
                        </div>
                        <div>
                           <p className="footer-sepra"  style={{color:"#fff"}}>Terms & Conditions <span style={{fontSize:"25px"}}>&#8250;</span>  Privacy Policy.</p>
                        </div>
                     {/* </Row> */}
                  </Col>
               </Row>
            </Row>
          </Container>
         </div>
      </>
  );
    }
  export default Footer;