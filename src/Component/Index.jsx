import React from 'react';
import bg1 from '../Images/HeaderVideo.png';
import NavBar from './NavBar';
import NavBarr from './NavBarr';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Tokenomics from './Tokenomics';




const Index = () => {


   React.useEffect(()=>{
      AOS.init();
  })


   return (
      <>
      <div className="index-imgee"
      style={{
         backgroundImage: `url(${bg1})`,
         height: "120vh",
         backgroundRepeat:"no-repeat",
         width: "100%",
         position: "relative"
       }}>

         <div 
         className='index-para'
         style={{fontSize:"7rem", position:"absolute",marginLeft:"350px",marginTop:"200px",color:"white"}}
         data-aos="zoom-out-down"
         data-aos-delay="2000"	
         //  data-aos-offset="130"
          data-aos-duration="1000"
         >
            THE OCEANIC  HORRORS
         </div>
         
         <NavBar />
         <NavBarr />
    </div>
      </>
   );
}

export default Index;