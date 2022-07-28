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
import team from '../Images/team.png'
import insta from '../Images/instagram.png';
import discord from '../Images/game.png';
import twitter  from '../Images/circle.png';
import scroll from '../Images/ScrollIcon.png'



const NavBar = () => {
   return(
         <>
         <div bg="dark" variant="dark" className='index-nav' style={{position:"fixed",zIndex:"1000"}}>
            <div className='index-container'>
            <div href="#" className=''>
            <img 
                  alt=""
                  src={logo}
                  style={{height:"70px"}}
                  className="d-inline-block align-items-center logo-img"
            />
            </div>
            <div className="navbar-nav items">
               <div href="#" className='abc'>OUR AGENTS</div>
               <div href="#" className='abc'>MINT</div>
               <div href="#" className='abc'>UTILITIES</div>
               <div href="#" className='abc'>HARP</div>
               <div href="#" className='abc'>ROADMAP</div>
               <div href="#" className='abc'>FAQ</div>
               <div href="#" className='abc'>TRAINING</div>
               <div href="#" className='abc'>GROUND</div>
               <div href="#" className='abc'>OUR TEAM</div>
            </div>
            <div href="#">
            <img 
                  alt=""
                  src={logo1}
                  style={{height:"70px"}}
                  className="d-inline-block justify-content-center align-items-center logo-img"
            />
            </div>
            <div className="navbar-nav">
               <div href="#" className='abc'>PLAY NOW</div>
            </div>   
            <div href="#" className='mt-5'>
             <div className='nav-icons'>
                              <div className='me-2' style={{marginBottom:"8px"}}>
                              <a 
                              href="https://discord.com/invite/tPgYHb2ZEn" target="_blank">
                                 <img src={discord} alt="acv" />
                              </a>   
                              </div>
                              <div className='icon me-2'style={{marginBottom:"2px"}}>
                              <a
                              href="https://www.instagram.com/thegooeyclub/" target="_blank">
                                 <img src={insta} alt="acv" />
                              </a>
                              </div>
                              <div className='icon'>
                              <a
                              href="https://twitter.com/TheGooeyClub" target="_blank">
                                 <img src={twitter} alt="acv"/>
                              </a>
                           </div>
                       </div>
               </div>   
            </div>
         </div>
         </>
      );
   }

export default NavBar;