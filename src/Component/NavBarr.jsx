import React from 'react'
import { Container, Nav , Navbar } from 'react-bootstrap';
import '../App.css';
import { Icon } from '@iconify/react';
import logo from '../Images/trident1.png';
import logo1 from '../Images/TredientLongIcon.png';
import agents from '../Images/agents.png';
import mint from '../Images/mint.png';
import nft from '../Images/nft.png';
import chartt from '../Images/chartt.png';
import faq from '../Images/faq.png';
import roadmap from '../Images/roadmap.png';
import team from '../Images/team.png';
import insta from '../Images/instagram.png';
import discord from '../Images/game.png';
import twitter  from '../Images/circle.png';
import scroll from '../Images/ScrollIcon.png'




const NavBarr = () => {
   return(
         <>
         <div bg="dark" variant="dark" className='indexx-nav' style={{position:"fixed", zIndex:"1000"}}>
            <div className='index-containerr'>
            <a href="#">
            <img 
                  alt=""
                  src={logo}
                  style={{height:"70px",marginTop:"20px"}}
                  className="navbarr-img"
            />
            </a>
            <div className="new-nav">
               <a href="#agents" className='abc'>
                  <img src={agents} alt="cde"/>
               </a>
               <a href="#mint" className='abc'>
                  <img src={mint} alt="cde"/>
                  </a>
               <a href="#" className='abc'>
                  <img src={nft} alt="cde"/>
               </a>
               <a href="#" className='abc'>
                <img src={chartt} alt="cde"/>
               </a>
               <a href="#faqs" className='abc'>
                  <img src={faq} alt="cde"/>
                  </a>
               <a href="#" className='abc'>
                  <img src={roadmap} alt="cde"/>
                  </a>
               <a href="#team" className='abc'>
                  <img src={team} alt="cde"/>
               </a>
               <a href="#" className='abc'>
               <img 
                  alt="cde"
                  src={logo1}
                  style={{height:"70px"}}
                  className="d-inline-block justify-content-center align-items-center logo-img"
               />
                  </a>
               </div>  
            </div>
         </div>
         </>
      );
   }

export default NavBarr;