import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
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

  <div class="ui vertical stripe segment">
    <div class="ui text container">
      <h3 class="ui header">Breaking The Grid, Grabs Your Attention</h3>
      <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
      <a class="ui large button">Read More</a>
      <h4 class="ui horizontal header divider">
        <a href="#">Case Studies</a>
      </h4>
      <h3 class="ui header">Did We Tell You About Our Bananas?</h3>
      <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
      <a class="ui large button">I'm Still Quite Interested</a>
    </div>
  </div>


  <div class="ui inverted vertical footer segment">
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="three wide column">
          <h4 class="ui inverted header">About</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">Sitemap</a>
            <a href="#" class="item">Contact Us</a>
            <a href="#" class="item">Religious Ceremonies</a>
            <a href="#" class="item">Gazebo Plans</a>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">Services</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">Banana Pre-Order</a>
            <a href="#" class="item">DNA FAQ</a>
            <a href="#" class="item">How To Access</a>
            <a href="#" class="item">Favorite X-Men</a>
          </div>
        </div>
        <div class="seven wide column">
          <h4 class="ui inverted header">Footer Header</h4>
          <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
}

export default Header;