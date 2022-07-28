import React from 'react';
import image1 from "../Images/1.png";
import image2 from "../Images/2.png";
import image3 from "../Images/3.png";
import image4 from "../Images/4.png";
import image5 from "../Images/5.png";
import up from '../Images/upper-wave.png';
import down from '../Images/down-wave.png';
import Agent from '../Images/Agentbg.png';
import Wave from "react-wavify";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SwiperCore,{Autoplay} from 'swiper';
import { Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
SwiperCore.use([Autoplay]);

// import SwiperCore,{Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// SwiperCore.use([Autoplay]);


// import 'animate.css';



const Agents = () => {


   React.useEffect(()=>{
      AOS.init();
   })


   return(
      <>

         <div 
            className="Agent-img"
            id='agents'
            style={{
            backgroundImage: `url(${Agent})`,   
            height:"88vh",
            width:"100%",
            position: "relative"}}
            >

          <Swiper         
                    style={{textAlign:"center"}}  
                     spaceBetween={90}
                     slidesPerView={1}
                     autoplay={{ delay: 2000 }}
                     speed={6000}
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper) => console.log(swiper)}>
               <SwiperSlide><img src={image4} className="ag-imgs"/></SwiperSlide>       
               <SwiperSlide><img src={image3} className="ag-imgs"/></SwiperSlide>       
               <SwiperSlide><img src={image2} className="ag-imgs"/></SwiperSlide>       
               <SwiperSlide><img src={image4} className="ag-imgs"/></SwiperSlide>
               <SwiperSlide><img src={image5} className="ag-imgs"/></SwiperSlide>        
               <SwiperSlide><img src={image4} className="ag-imgs"/></SwiperSlide>       
               <SwiperSlide><img src={image3} className="ag-imgs"/></SwiperSlide>        
               <SwiperSlide><img src={image5} className="ag-imgs"/></SwiperSlide>        
          </Swiper>            
            {/* <img

               data-aos="fade-up"
               data-aos-delay="300"	
               data-aos-offset="130"
               data-aos-duration="1000"

            src={img1} alt='abc' height="600px" width="350px" style={{position:"absolute", marginTop:"50px"}}
            className="agent-img"/> */}
            {/* <div className='imgg'> 
               <img src={down} alt="abc" style={{position:"absolute"}} className="wavess"/>
               <img src={up} alt="abc" style={{position:"absolute"}}
               className="wavess"/>
            </div> */}

         <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              top: "-5px",
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
                height: 200,
                amplitude: 45,
                speed: 0.35,
                points: 3,
                opacity: 0.4
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              top: "-5px",
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
                height: 200,
                amplitude: 40,
                speed: 0.25,
                points: 3,
                opacity:0.4
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              top: "-5px",
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
                height: 200,
                amplitude:35,
                speed: 0.15,
                points: 4,
                opacity:0.2
              }}
            />
          </div>
         </div>
      </>
   );
}

export default Agents;
