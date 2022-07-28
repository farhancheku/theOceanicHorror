import React from 'react';
import bg from '../Images/Vector8.png';
import { Col, Container, Row, Button } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Utilities = () => {



   React.useEffect(()=>{
      AOS.init();
   })


   return (
      <>
         <div className='utility-img'
            id='utilities'
            style={{
            backgroundImage: `url(${bg})`,
            width:"100%",
            position: "relative",
            // marginTop:"0px" 
         }}>
         
         <Container className='container mt-5' 
           data-aos="fade-up"
           data-aos-delay="300"	
            data-aos-offset="130"
            data-aos-duration="1000" 
         >
            <p
            className='u-header'
            style={{color:"white"}}>UTILITIES</p>
               <p style={{color:"white",fontSize:"3rem"}}
               className="u-heading">AGENT UTILITY</p>

            <Row className='uti-li'>
               <Col style={{color:"white"}}>
                  <li className='u-li'>PZE</li></Col>
               <Col style={{color:"white"}}>
                  <li className='u-li'>PVP</li>
               </Col>
            </Row>
            <Row className='uti-li'>
               <Col style={{color:"white"}}>
                  <li  className='u-li'>Stiking-LeaderBoard Points</li>
                  </Col>
               <Col style={{color:"white"}}>
                  <li className='u-li'>Mutation & Power Ups</li>
               </Col>
            </Row>
            <Row className='uti-li'>
               <Col style={{color:"white"}}>
                  <li  className='u-li'>Raffles & Auction House</li></Col>
               <Col style={{color:"white"}}>
                  <li className='u-li'>Monthly Rallies</li>
               </Col>
            </Row>
            <Row className='uti-li'>
               <Col style={{color:"white"}}>
                  <li  className='u-li'>Grand Tournaments</li></Col>
               <Col style={{color:"white"}}>
                  <li className='u-li'>ANIME-Seasonal Streamed on MBL</li>
               </Col>
            </Row>
            <Row className='uti-li'>
               <Col style={{color:"white"}}>
                  <li  className='u-li'>Exclusive MarketPlace for MBL</li></Col>
               <Col style={{color:"white"}}>
                  <li className='u-li'>ANIME-Seasonal Streamed on OH</li>
               </Col>
            </Row>
            <Row className='uti-li'>
               <Col style={{color:"white"}}>
                  <li  className='u-li'>DAO Voting</li></Col>
               <Col style={{color:"white"}}>
                  <li className='u-li'>Comics</li>
               </Col>
            </Row>
            <Row className='uti-li'>
               <Col style={{color:"white"}}>
                  <li  className='u-li'>Merch</li>
               </Col>
            </Row>
          </Container>


          <Container className='container mt-5'>
               <div style={{color:"white",fontSize:"3rem", marginBottom:"35px"}}
               className="u-heading w-100">HARP UTILITY</div>

            <Row className='uti-lii'>
               <Col style={{color:"white"}}>
                  <li  className='u-lii'>In-Game Purchase</li></Col>
               <Col style={{color:"white"}}>
                  <li className='u-lii'>Raffles & Auctions </li>
               </Col>
            </Row>
            <Row className='uti-lii'>
               <Col style={{color:"white"}}>
                  <li  className='u-lii'>Merch & Comics Subscription</li>
                  </Col>
               <Col style={{color:"white"}}>
                  <li className='u-lii'>Mutations</li>
               </Col>
            </Row>
            <Row className='uti-lii'>
               <Col style={{color:"white"}}>
                  <li  className='u-lii'>Power Ups</li></Col>
               <Col style={{color:"white"}}>
                  <li className='u-lii'>Rankings & Leaderboard</li>
               </Col>
            </Row>
            <Row className='uti-lii'>
               <Col style={{color:"white"}}>
                  <li  className='u-lii'>Exclusive Drops</li></Col>
            </Row>
          </Container>

         </div>
      </>
   );
}

export default Utilities;