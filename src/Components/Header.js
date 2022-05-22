import React from 'react';

import '../App.css';

const Header = () => {

    return (
          
<div>
<div class="ui large top fixed hidden menu">
  <div class="ui container">
    <a class="active item">Home</a>
    <a class="item">Work</a>
    <a class="item">Company</a>
    <a class="item">Careers</a>
    <div class="right menu">
      <div class="item">
        <a class="ui button">Log in</a>
      </div>
      <div class="item">
        <a class="ui primary button">Sign Up</a>
      </div>
    </div>
  </div>
</div>


<div class="ui vertical inverted sidebar menu">
  <a class="active item">Home</a>
  <a class="item">Work</a>
  <a class="item">Company</a>
  <a class="item">Careers</a>
  <a class="item">Login</a>
  <a class="item">Signup</a>
</div>



<div class="pusher">
  <div id='header' class="ui inverted vertical masthead center aligned segment">

    <div class="ui container">
      <div class="ui large secondary inverted pointing menu">
        <a class="toc item">
          <i class="sidebar icon"></i>
        </a>
        <a class="active item">Home</a>
        <a class="item">Work</a>
        <a class="item">Company</a>
        <a class="item">Careers</a>
        <div class="right item">
          <h1 id='design-ontario-title'>Design Ontario</h1>
        </div>
      </div>
    </div>

    <div class="ui text container">
      <h1 class="ui inverted header" id='main-heading'>
        Qualified Potato for your house drawings
      </h1>
      <h2 id='secondary-heading'>Do whatever you want when you want to.placeholder</h2>
      <div class="ui huge primary button">Get Started placeholder<i class="right arrow icon"></i></div>
    </div>

  </div>

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
          <p class='content-heading'>DECK DRAWINGS</p>
          <p class='content-paragraph'>Brenda never wanted to be famous. While most of her friends dreamed about being famous</p>
          <div class="ui small primary button">Get Started placeholder<i class="right arrow icon"></i></div>
          </div>
        <div class="four wide column expertise">          <p class='content-heading'>DECK DRAWINGS</p>
          <p class='content-paragraph'>Brenda never wanted to be famous. While most of her friends dreamed about being famous</p>
          <div class="ui small primary button">Get Started placeholder<i class="right arrow icon"></i></div></div>
        <div class="four wide column expertise">          <p class='content-heading'>DECK DRAWINGS</p>
          <p class='content-paragraph'>Brenda never wanted to be famous. While most of her friends dreamed about being famous</p>
          <div class="ui small primary button">Get Started placeholder<i class="right arrow icon"></i></div></div>
        <div class="four wide column expertise">          <p class='content-heading'>DECK DRAWINGS</p>
          <p class='content-paragraph'>Brenda never wanted to be famous. While most of her friends dreamed about being famous</p>
          <div class="ui small primary button">Get Started placeholder<i class="right arrow icon"></i></div></div>
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

export default Header;