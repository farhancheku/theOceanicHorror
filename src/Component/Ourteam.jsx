import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import insta from '../Images/instagram.png';
import discord from '../Images/game.png';
import twitter  from '../Images/circle.png';
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ourteam = ({data}) => {
   console.log(data, "data")



   React.useEffect(()=>{
      AOS.init();
   })


   return(
      <>
         <Container className=''
         id='team'>      
          <div className=''
          data-aos="fade-zoom-in"
          data-aos-delay="200"
          data-aos-offset="0">
               <p style={{color:"white"}}
               className="header-team">
                  OUR TEAM
               </p>
         </div>

         <Row className='' >
             
                  <div className="container" 
                   data-aos-delay="300"	
                   data-aos-offset="130"
                   data-aos-duration="1000">
                     <div className="row">
                     {
                         data.ourteam.map((item) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                           <div className="our-team" style={{borderRadius:"40px 0px"}}>
                           <div class="picture">
                              <img className="img-fluid" src={item.img_src} alt=""/>
                           </div>
                           <div className="team-content">
                              <h3 className="name" style={{color:"white"}}>{item.name}</h3>
                              <h4 className="title">{item.position}</h4>
                              <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur, elit sit amet dolor sit amet</p>
                           </div>
                           <ul className="social">
                              <li><a href=""><Icon icon="akar-icons:instagram-fill" /></a></li>
                              <li><a href=""><Icon icon="akar-icons:discord-fill" /></a></li>
                              <li><a href=""><Icon icon="akar-icons:twitter-fill" /></a></li>
                           </ul>
                           </div>
                        </div>
                                
          ))} 
                           {/* <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                           <div class="our-team">
                           <div class="picture">
                              <img class="img-fluid" src="https://picsum.photos/130/130?image=839"/>
                           </div>
                           <div class="team-content">
                              <h3 class="name">Patricia Knott</h3>
                              <h4 class="title">Web Developer</h4>
                           </div>
                           <ul class="social">
                              <li><a href="https://codepen.io/collection/XdWJOQ/" class="" aria-hidden="true"></a></li>
                              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
                              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                           </ul>
                           </div>
                        </div>
                           <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                           <div class="our-team">
                           <div class="picture">
                              <img class="img-fluid" src="https://picsum.photos/130/130?image=856"/>
                           </div>
                           <div class="team-content">
                              <h3 class="name">Justin Ramos</h3>
                              <h4 class="title">Web Developer</h4>
                           </div>
                           <ul class="social">
                              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
                              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
                              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                           </ul>
                           </div>
                        </div>
                           <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                           <div class="our-team">
                           <div class="picture">
                              <img class="img-fluid" src="https://picsum.photos/130/130?image=836"/>
                           </div>
                           <div class="team-content">
                              <h3 class="name">Mary Huntley</h3>
                              <h4 class="title">Web Developer</h4>
                           </div>
                           <ul class="social">
                              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
                              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
                              <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                           </ul>
                           </div>
                        </div> */}
                     </div>
                  </div>
         </Row> 

        </Container>
      </>
      );
} 
export default Ourteam;