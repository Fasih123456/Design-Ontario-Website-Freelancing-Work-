import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import '../../App.css';
import './Home.css';

const Home = () => {
  return (          
  <div>
    <div class="pusher">
      <Header title='Qualified Civil Engineers for your Drawings' subtitle='Do whatever you want when you want to'/>

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
          <p class='content-heading'>Floor Plan Framing and Permit Drawings</p>
          <p class='content-paragraph'> Specialized in 2D AutoCAD DRAFTING AND PRODUCTION of construction drawing in accordance with Ontario and Canadian building codes.</p>
          <div class="ui small primary button">Get Started<i class="right arrow icon"></i></div></div>
        <div class="four wide column expertise">          <p class='content-heading'>Architectural Rendering</p>
          <p class='content-paragraph'>If you need a render done for proof of concept or final presentation this is the place</p>
          <div class="ui small primary button">Get Started<i class="right arrow icon"></i></div></div>
        <div class="four wide column expertise">          <p class='content-heading'>Interior Renovations</p>
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
      <div class="ui small primary button" id='contact-us-button'>Get a Qoute<i class="right arrow icon"></i></div>
    </div>

  </div>




    <Footer />
    </div>
  </div>
</div>
    );
}

export default Home;