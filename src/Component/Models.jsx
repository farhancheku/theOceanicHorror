import React from 'react'
import { useState, useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import icon1 from '../Images/icon1.png';
import icon2 from '../Images/icon2.png';
import icon3 from '../Images/icon3.png';
import icon4 from '../Images/icon4.png';
import icon5 from '../Images/icon5.png';
import icon6 from '../Images/icon6.png';

import image1 from "../Images/1.png";
import image2 from "../Images/2.png";
import image3 from "../Images/3.png";
import image4 from "../Images/4.png";
import image5 from "../Images/5.png";
import { Col, Container, Row } from 'react-bootstrap';


const Models = (props) => {

const{v}=props;
   const [data, setData] = useState({
      img: image1,
      icon: icon1,
      title: "Goliath #XI",
      subScript:"552",
      superScript:"7",
      description:
        "Goliath is a superhuman chosen by the secret agency OIS to dig out the gold. He is the champion of swordsmanship and the possessor of the powerful charcoal helmet, which makes him capable of seeing enemies from a distance of thousand miles. Fate chooses him to save the world by gifting him the super abilities to fight supernatural creatures.",
    });


    const logo_3 = [
      {
        img: image1,
        icon: icon1,
        title: "Goliath #XI",
        subScript:"552",
        superScript:"7",
        description:
          "Goliath is a superhuman chosen by the secret agency OIS to dig out the gold. He is the champion of swordsmanship and the possessor of the powerful charcoal helmet, which makes him capable of seeing enemies from a distance of thousand miles. Fate chooses him to save the world by gifting him the super abilities to fight supernatural creatures.",
      },
      {
        img: image2,
        icon: icon2,
        title: "Kali #XII",
        subScript:"211",
        superScript:"2",
        description:
          "Kali is the steel-headed agent, with an immense skill of bone-breaking ability using his skull. His one blow tears enemies into thousand pieces. Also, the rare helmet detects all the infra-red and gamma rays coming from the bloody Sirens; so his position as a siren detector is really crucial to the deadly fight. As a chosen guardian of humanity, Kali slays his enemies with his unique arrow rifle.",
      },
      {
        img: image3,
        icon: icon3,
        title: "LANCELOT#XIII",
        subScript:"196",
        superScript:"1",
        description:
          "The most powerful agent with the intelligence of God, Lancelot is the greatest guardian of the human race. The deep sense of sacrifice and brotherhood makes him the greatest fighter with no fear of death.",
      },
      {
        img: image2,
        icon: icon4,
        title: "EDAN #XIV",
        subScript:"248",
        superScript:"0",
        description:
          "Edan is a great aspirant of the Demi-gods and longs to achieve their strength by continuous practice. With an unparalleled exhibition of valor, he is usually placed at the forefront against the Sirens.",
      },
      {
        img: image1,
        icon: icon5,
        title: "SINISTERSPY #XV",
        subScript:"483",
        superScript:"6",
        description:
          "Holding the hottest lava in his chest, Sinisterspy is the agent known for his fury and wrath. He is chosen to guard the human race, by the devil himself to go against the fire-spitting Sirens as he is as brutal as lucifer. Sinisterspy is the personified form of fire itself.",
      },
      {
        img: image2,
        icon: icon2,
        title: "Kali #XII",
        subScript:"211",
        superScript:"2",
        description:
          "Kali is the steel-headed agent, with an immense skill of bone-breaking ability using his skull. His one blow tears enemies into thousand pieces. Also, the rare helmet detects all the infra-red and gamma rays coming from the bloody Sirens; so his position as a siren detector is really crucial to the deadly fight. As a chosen guardian of humanity, Kali slays his enemies with his unique arrow rifle.",
      },
      {
        img: image3,
        icon: icon4,
        title: "EDAN #XIV",
        subScript:"248",
        superScript:"0",
        description:
          "Edan is a great aspirant of the Demi-gods and longs to achieve their strength by continuous practice. With an unparalleled exhibition of valor, he is usually placed at the forefront against the Sirens.all the infra-red and gamma rays coming from the bloody Sirens; so his position as a siren detector is really crucial to the deadly fight. As a chosen guardian of humanity siren detector is really crucial to the deadly fight. As a chosen guardian of humanity",
      },{
         img: image1,
         icon: icon1,
         title: "Goliath #XI",
         subScript:"552",
         superScript:"7",
         description:
           "Goliath is a superhuman chosen by the secret agency OIS to dig out the gold. He is the champion of swordsmanship and the possessor of the powerful charcoal helmet, which makes him capable of seeing enemies from a distance of thousand miles. Fate chooses him to save the world by gifting him the super abilities to fight supernatural creatures.",
       }];


      React.useEffect(()=>{
         AOS.init();
      })


   return(
      <>
            {/* <div className="container desktop-nav">
                     <div className="row">
                        {logo_3.map((e) => {
                        return (
                           <>
                              <div className="col-12 col-lg-1 mx-auto d-flex justify-content-center">
                              <div className="test">
                                 <img
                                    src={e.icon}
                                    alt="img"
                                    className="img-fluid img-hover"
                                    // onClick={() => handleClick(e)}
                                 />
                                 <span className="text-light">{e.title}</span>
                              </div>
                              </div>
                           </>
                        );
                        })}
                  </div>
                </div> */}


         <Container>
            <Col className='' id='mintt'>
               <Row className='mt-5' 
                  data-aos="fade-up"
                  data-aos-delay="100"	
                   data-aos-offset="50"
                   data-aos-duration="1000">
                   <Col sm={12} md={6} lg={5} >
                     <div className='mint-imgg'>
                        <img src={logo_3[v].img} alt="img" className='img-fluid text-center'/>
                     </div>
                  </Col>
                  <Col className='ms-auto mint-contentt' sm={12} md={6} lg={7}
                  >
                     <div className='text-white display-4 fw-bold futura-bold text-mintt'>
                        {logo_3[v].title}
                      <div className=''  style={{}}>
                        <span className="" style={{fontSize:"2.5rem"}}>{logo_3[v].subScript}</span> <span className="" style={{fontSize:"2.5rem"}}>(+{logo_3[v].superScript}) units</span> 
                        </div>
                     </div>
                     <div className='text-white fs-5 montserrat-text minttt-para' style={{textAlign:"justify"}}>
                     {logo_3[v].description}
                     </div>
                  </Col>
             </Row>
         </Col>  
     </Container>
   </>
   );
}

export default Models;