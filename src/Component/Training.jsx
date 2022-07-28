import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Trainingbg from "../Images/Training.png";
import skull from '../Images/skull1.svg';
import skull2 from '../Images/skull2g.svg';
import asset from '../Images/Assettraining.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Training = () => {

   React.useEffect(()=>{
      AOS.init();
   })


  return (
    <>
      <div
        className="tr-img"
        id="training"
        style={{
          backgroundImage: `url(${Trainingbg})`,
          height: "100vh",
          width: "100%",
          position: "relative",
        }}
      >
         <div className="trr-img"
         style={{
         backgroundImage: `url(${asset})`,
          height: "65vh",
          bottom:0,
          width: "100%",
          position: "absolute"
         }}>
         </div>

        <Container className=""
         data-aos="fade-up"
         data-aos-delay="300"	
         data-aos-offset="130"
         data-aos-duration="1000"
        >
          <Row className="training-content"
         //  style={{display:"flex", flexWrap:"wrap", gap:"280px"}}
          >
            <Col sm={12} md={6} lg={6}>
              <div className="w-100 skull-content"> 
               <div className="" style={{position:"absolute"}}>
                  <img src={skull} alt="abc" className="skull-image"/>
               </div>
               <div className="skl" style={{position:"absolute"}} >
                  <img src={skull2} alt="abc" className="skull-image"/>
               </div>
               </div> 
            </Col>
            <Col sm={12} md={6} lg={6} className="trrr-content">
              <div className="tr-content">
                <div
                  className="tr-heading display-2 w-100"
                  style={{
                    fontSize: "66px",
                    fontWeight:"400px",
                    color: "white",
                    maxWidth: "100px",
                    fontFamily:"ClassicRoman"
                  }}
                >
                  TRAINING GROUND
                </div>
                <p className="tr-paraa" style={{ color: "white" }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor veniam et illo recusandae id vitae totam maiores harum,
                  natus.
                </p>
              </div>
              <div className="training-button text-center">
                <a href="#" className="btn" style={{fontFamily:"ClassicRoman" , fontSize:"20px", fontWeight:"400"}}>
                  <span>PLAY NOW</span>
                </a>
              </div>
            </Col>
          </Row>          
        </Container>
      </div>
    </>
  );
};
export default Training;
