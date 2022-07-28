import React from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import war from '../Images/warbg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const War = () => {

   React.useEffect(()=>{
      AOS.init();
   })



   return (
      <>
      <div  
            data-aos="zoom-in-down"
            data-aos-delay="500"	
            //  data-aos-offset="130"
             data-aos-duration="1000"
            className="war-img"
            id='war'
            style={{
            backgroundImage: `url(${war})`,   
            height:"110vh",
            width:"100%",
            bottom:0,
            position: "relative"}}
            >
         <Container className=' d-flex align-items-center h-100 justify-content-center'
           data-aos="fade-up"
           data-aos-delay="300"	
           data-aos-offset="130"
           data-aos-duration="1000"
         >      
         <Col className=''
               // style={{position:"absolute"}}
               >
               <p style={{color:"white"}}
               className="header-war">
                  WAR ROOM
               </p>
               <p 
                  className='war-para w-75 mx-auto text-center'
                  style={{color:"white"}}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore pariatur assumenda impedit molestias officiis possimus consequatur corporis. impedit molestias officiis possimus consequatur corporis
               </p>
               <div className='text-center mt-5' style={{fontFamily:"ClassicRoman" , fontSize:"20px", fontWeight:"400"}}>
               <a href="#" className="btn"><span>PLAY NOW</span></a>
               </div>
         </Col>
       </Container>
      </div>
      </>
   );
}

export default War;