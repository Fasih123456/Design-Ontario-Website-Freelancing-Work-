import React from 'react';
import Header from './Header';

import '../App.css';

const Home = () => {
  return (          
  <div>
    <div class="pusher">
      <Header title='Qualified Civil Engineer for your Drawings' subtitle='Do whatever you want when you want to'/>

  <div class="ui vertical stripe segment">
    <div class="ui middle aligned stackable">
      <div class="row">

        <div class="six wide right floateds column">
          <img src="images/splash1.jpg" id='main image' class="ui large bordered rounded image" />
        </div>
      </div>

    </div>
  </div>


  <div class="vertical stripe quote segment" id='middle-section'>
    <div class="ui equal width stackable internally grid">
      <h1 className='large center' id='middle-section-title'>We are the experts at:</h1>
      <div class="center aligned row" id='middle-section-content'>
        <div class="four wide column expertise" id='one'>
          <p class='content-heading'>Deck Drawings</p>
          <p class='content-paragraph'>Design based on local building codes and provide you with calculation needed for permit drawings.</p>
          <div class="ui small primary button">Get Started<i class="right arrow icon"></i></div>
          </div>
        <div class="four wide column expertise">          
          <p class='content-heading'>Floor Plan, Framing and Permit Drawings</p>
          <p class='content-paragraph'> Specialized in 2D AutoCAD DRAFTING AND PRODUCTION of construction drawing in accordance with Ontario and Canadian building codes.</p>
          <div class="ui small primary button">Get Started<i class="right arrow icon"></i></div></div>
        <div class="four wide column expertise">          <p class='content-heading'>Architectural Rendering</p>
          <p class='content-paragraph'>If you need a render done for proof of concept or final presentation this is the place</p>
          <div class="ui small primary button">Get Started<i class="right arrow icon"></i></div></div>
        <div class="four wide column expertise">          <p class='content-heading'>City Permit Drawings for Interior Renovations</p>
          <p class='content-paragraph'>Prepare you a full set of interior renovation permit drawings, including architectural, structural, and other drawings that will help you stay on time.</p>
          <div class="ui small primary button">Get Started<i class="right arrow icon"></i></div></div>
      </div>
    </div>
  </div>



  <div class="pusher">
  <div id='header' class="ui inverted vertical masthead center aligned segment">

    <div class="ui text container">
      <h1 class="ui inverted header" id='upgrade-house-heading'>
        Ready to upgrade your house with our help?
      </h1>
      <div class="ui small primary button" id='contact-us-button'>Contact us<i class="right arrow icon"></i></div>
    </div>

  </div>




      <div class="ui inverted vertical footer segment">
        <div class="ui container">
          <div class="ui stackable inverted divided equal height stackable grid">
            <div class="three wide column">
              <h4 class="ui inverted header footer-heading">About</h4>
              <div class="ui inverted link list">
                <a href="#" class="item footer-content">Sitemap</a>
                <a href="#" class="item footer-content">Contact Us</a>
                <a href="#" class="item footer-content">Religious Ceremonies</a>
                <a href="#" class="item footer-content">Gazebo Plans</a>
              </div>
            </div>
            <div class="three wide column">
              <h4 class="ui inverted header footer-heading">Services</h4>
              <div class="ui inverted link list">
                <a href="#" class="item footer-content">Banana Pre-Order</a>
                <a href="#" class="item footer-content">DNA FAQ</a>
                <a href="#" class="item footer-content">How To Access</a>
                <a href="#" class="item footer-content">Favorite X-Men</a>
              </div>
            </div>
            <div class="seven wide column">
              <h4 class="ui inverted header footer-heading">Footer Header</h4>
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

export default Home;