import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Slideshow from '../SlideShow';
import 'react-slideshow-image/dist/styles.css'


import '../../App.css';
import './Work.css';
const Work = () => {    
    return (
        <div>
        <Header 
        title='About Design Ontario' 
        subtitle='Design Ontario can create drafts and drawings for all your construction needs.' 
        />
        <div id='work-page-body'>
            <div class="ui one column doubling stackable grid container "  id='deck-main'>
                <div class="column" id='deck-section' >
                <Slideshow type='Deck' id='deck-slide' />
                </div>
                <div class="column">
                    <h2>Deck Drawings</h2>
                    <p>
                        So you or your company need drafts. You want to draw up plans, or create shop drawings, but you don’t employ a CAD technician. Or you have a one-time project that requires software you’re not experienced with.
                    </p>
                    <p>
                        We can help. We give you the opportunity to have your own drafts person without adding people to your staff. You call us and we provide you with the right specialist to complete your project. You get personalized service, on-time delivery and exceptional results.
                    </p>
                    <p>
                        We aredrafting, your one-stop source for all your drafting and CAD needs. We do architectural, working, and presentation drawings for any type of industry or trade.
                    </p>
                </div>
            </div>
            

            <div class="ui one column doubling stackable grid container">
            <div class="column">
                    <Slideshow type='Floor' />
                </div>
                <div class="column">
                <h2>Floor Plan Framing and Permit Drawings </h2>
                    <p>
                        So you or your company need drafts. You want to draw up plans, or create shop drawings, but you don’t employ a CAD technician. Or you have a one-time project that requires software you’re not experienced with.
                    </p>
                    <p>
                        We can help. We give you the opportunity to have your own drafts person without adding people to your staff. You call us and we provide you with the right specialist to complete your project. You get personalized service, on-time delivery and exceptional results.
                    </p>
                    <p>
                        We are  drafting, your one-stop source for all your drafting and CAD needs. We do architectural, working, and presentation drawings for any type of industry or trade.
                    </p>
                </div>
 

            </div>
            <div class="ui one column doubling stackable grid container">
                <div class="column">
                    <Slideshow type='Architect' />
                </div>
                <div class="column">
                <h2>Architectural Rendering</h2>
                    <p>
                        So you or your company need drafts. You want to draw up plans, or create shop drawings, but you don’t employ a CAD technician. Or you have a one-time project that requires software you’re not experienced with.
                    </p>
                    <p>
                        We can help. We give you the opportunity to have your own drafts person without adding people to your staff. You call us and we provide you with the right specialist to complete your project. You get personalized service, on-time delivery and exceptional results.
                    </p>
                    <p>
                        We are  drafting, your one-stop source for all your drafting and CAD needs. We do architectural, working, and presentation drawings for any type of industry or trade.
                    </p>
                </div>



            </div>
            <div class="ui one column doubling stackable grid container">
                <div class="column" >
                    <Slideshow type='Interior' />
                </div>
                <div class="column">
                <h2>Interior Renovations </h2>
                    <p>
                        So you or your company need drafts. You want to draw up plans, or create shop drawings, but you don’t employ a CAD technician. Or you have a one-time project that requires software you’re not experienced with.
                    </p>
                    <p>
                        We can help. We give you the opportunity to have your own drafts person without adding people to your staff. You call us and we provide you with the right specialist to complete your project. You get personalized service, on-time delivery and exceptional results.
                    </p>
                    <p>
                        We are  drafting, your one-stop source for all your drafting and CAD needs. We do architectural, working, and presentation drawings for any type of industry or trade.
                    </p>
                </div>


            </div>
        </div>
        <Footer />
        </div>
      );
}





export default Work;