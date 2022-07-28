import React from 'react';
import { Col, Container, Row, Button } from "react-bootstrap";
import faq from '../Images/faqq.png';
import Accordion from 'react-bootstrap/Accordion';
import Ic from '../Images/Icon.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faqs = () => {

   React.useEffect(()=>{
      AOS.init();
   })

   return (
      <>
         <div
            className="fq-img"
            id='faqs'
            style={{
            backgroundImage: `url(${faq})`,   
            height:"145vh",
            width:"100%",
            position: "relative",
            marginTop: "230px"}}
            >
         <Container data-aos="fade-up"
                  data-aos-delay="300"	
                   data-aos-offset="130"
                   data-aos-duration="1000">
            <div className='text-center'>
               <p
               style={{color:"white"}}
               className="header-faqs">
                  FAQ'S
               </p>
           </div>

            <div className='container faq-container w-75' style={{position:"absolute", marginLeft:"80px",marginTop:"40px"}}>
              <Accordion defaultActiveKey="0" style={{ color: "#fff" }}>
                <Accordion.Item
                  // style={{ backgroundColor: "#6d0303", color: "" }}
                  style={{ backgroundColor: "#050505", color: "" }}
                >
                  <Accordion.Header
                    className="accordhead"
                    style={{
                      // fontFamily: "Bronova-regular",
                    }}
                  >
                    OCEANIC HORRORS? WHAADDD?
                  </Accordion.Header>
                  <Accordion.Body>
                     The chills of the oceans! An Ocean Verse! A multiplayer 3D FPS Game! And a story-mode potentially leading to anime! See character intro for more depth.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                eventKey="1"
                  // style={{ backgroundColor: "#6d0303", color: "" }}
                  style={{ backgroundColor: "#050505", color: "" }}
                >
                  <Accordion.Header
                    className="accordhead"
                    style={{
                      borderTop: "1px solid #A20410 !important",
                      // fontFamily: "Bronova-regular",
                    }}
                  >
                    OCEANIC HORRORS? WHAADDD?
                  </Accordion.Header>
                  <Accordion.Body>
                     The chills of the oceans! An Ocean Verse! A multiplayer 3D FPS Game! And a story-mode potentially leading to anime! See character intro for more depth.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                eventKey="2"
                  // style={{ backgroundColor: "#6d0303", color: "" }}
                  style={{ backgroundColor: "#050505", color: "" }}
                >
                  <Accordion.Header
                    className="accordhead"
                    style={{
                      borderTop: "1px solid #A20410 !important",
                      // fontFamily: "Bronova-regular",
                    }}
                  >
                    OCEANIC HORRORS? WHAADDD?
                  </Accordion.Header>
                  <Accordion.Body>
                     The chills of the oceans! An Ocean Verse! A multiplayer 3D FPS Game! And a story-mode potentially leading to anime! See character intro for more depth.
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item
                eventKey="3"
                  // style={{ backgroundColor: "#6d0303", color: "" }}
                  style={{ backgroundColor: "#050505", color: "" }}
                >
                  <Accordion.Header
                    className="accordhead"
                    style={{
                      borderTop: "1px solid #A20410 !important",
                      // fontFamily: "Bronova-regular",
                    }}
                  >
                    OCEANIC HORRORS? WHAADDD?
                  </Accordion.Header>
                  <Accordion.Body>
                     The chills of the oceans! An Ocean Verse! A multiplayer 3D FPS Game! And a story-mode potentially leading to anime! See character intro for more depth.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                eventKey="4"
                  // style={{ backgroundColor: "#6d0303", color: "" }}
                  style={{ backgroundColor: "#050505", color: "" }}
                >
                  <Accordion.Header
                    className="accordhead"
                    style={{
                      borderTop: "1px solid #A20410 !important",
                      // fontFamily: "Bronova-regular",
                    }}
                  >
                    OCEANIC HORRORS? WHAADDD?
                  </Accordion.Header>
                  <Accordion.Body>
                     The chills of the oceans! An Ocean Verse! A multiplayer 3D FPS Game! And a story-mode potentially leading to anime! See character intro for more depth.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                eventKey="5"
                  // style={{ backgroundColor: "#6d0303", color: "" }}
                  style={{ backgroundColor: "#050505", color: "" }}
                >
                  <Accordion.Header
                    className="accordhead"
                    style={{
                      borderTop: "1px solid #A20410 !important",
                      // fontFamily: "Bronova-regular",
                    }}
                  >
                    OCEANIC HORRORS? WHAADDD?
                  </Accordion.Header>
                  <Accordion.Body>
                     The chills of the oceans! An Ocean Verse! A multiplayer 3D FPS Game! And a story-mode potentially leading to anime! See character intro for more depth.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                eventKey="6"
                  // style={{ backgroundColor: "#6d0303", color: "" }}
                  style={{ backgroundColor: "#050505", color: "" }}
                >
                  <Accordion.Header
                    className="accordhead"
                    style={{
                      borderTop: "1px solid #A20410 !important",
                      // fontFamily: "Bronova-regular",
                    }}
                  >
                    OCEANIC HORRORS? WHAADDD?
                  </Accordion.Header>
                  <Accordion.Body>
                     The chills of the oceans! An Ocean Verse! A multiplayer 3D FPS Game! And a story-mode potentially leading to anime! See character intro for more depth.
                  </Accordion.Body>
                </Accordion.Item>
               </Accordion>
               </div>

                  {/* <div
                   style={{position:"absolute" , marginTop: "42rem"}}
                   className='w-100 text-center '
                   >  
                     <span style={{color:"white"}}>Load More </span>
                     <span><img src={Ic} alt="abc"/></span>
                  </div> */}
               </Container>   
         </div>      
      </>
   );
}

export default Faqs;