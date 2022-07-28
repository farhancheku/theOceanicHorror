import React, { useState } from 'react';
import { Col, Container, Row, Button } from "react-bootstrap";
import Agent from '../Images/Agentbg.png';
import Icons from '../Images/Icon_wrap_slider.png';
import line from '../Images/Vectorline.png';
import icon1 from '../Images/icon1.png';
import icon2 from '../Images/icon2.png';
import icon3 from '../Images/icon3.png';
import icon4 from '../Images/icon4.png';
import icon5 from '../Images/icon5.png';
// import icon6 from '../Images/icon6.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SwiperCore,{Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import Models from './Models';
SwiperCore.use([Autoplay])



const Mint = () => {




   const[Id,setId]=useState(0);
   let images = [
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      icon2,
      icon4,
      icon1
   ]

   console.log(images,"dljkjsfgkj")

   React.useEffect(()=>{
      AOS.init();
   })

   return (
      <>
         <div className="Mint-img"
            id='mint'
            style={{
            // backgroundImage: `url(${Agent})`,   
            // height:"150vh",
            width:"100%",
            position: "relative"}}
            > 
            <div className='text-center'>   
               <p 
               data-aos="fade-zoom-in"
               data-aos-delay="200"
               data-aos-offset="0"
               style={{position:"absolute", color:"white"}}
               className="Mint-heading w-100">MINT</p>
            </div>   
            <div style={{positin:"absolute"}}>
             <Swiper           
                     spaceBetween={90}
                     slidesPerView={6}
                     autoplay={{ delay: 100 }}
                     speed={3000}
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper) => console.log(swiper)}
                     >
                        {images && images.map((data,i)=>(
                        <SwiperSlide >
                           {i%2===0 ?
                        <div className='swiper-first'>
                           <a href='#mintt' key={i} onClick={(e)=>setId(e.target.id)}><img src={data} alt="abc" style={{marginTop:"15rem"}} id={i}/></a>
                        </div>   
                        :
                        <div className='swiper-second'>
                           <a href='#mintt' key={i} onClick={(e)=>setId(e.target.id)}><img src={data} alt="abc" style={{marginTop:"15rem"}} id={i}/></a>    
                        </div>
                        }
                        </SwiperSlide>
                        ))}
                     </Swiper>
                  <Models v={Id}/>
            </div>
         </div>
         
      </>
   );
}
export default Mint;