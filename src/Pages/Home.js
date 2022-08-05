import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {Link} from 'react-router-dom';
import './css/App.css';
import './css/Home.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (          
  <div>
    <div class="pusher">
      <Header title='Qualified Civil Engineers for your Drawings' />

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
    
      <Container >
      <Row style={{paddingBottom: "10px"}}>
        <Col><p class='content-heading'>Deck Drawings</p></Col>
        <Col><p class='content-heading'>Floor Plan Framing and Permit Drawings</p></Col>
        <Col> <p class='content-heading'>Architectural Rendering</p></Col>
        <Col>
        <p class='content-heading'>Interior Renovations</p>
          </Col>
      </Row>
      <Row>
        <Col>          <p class='content-paragraph'>Design based on local building codes and provide you with calculation needed for permit drawings.</p>
          
          </Col>
        <Col>
        <p class='content-paragraph'> Specialized in 2D AutoCAD DRAFTING AND PRODUCTION of construction drawing in accordance with Ontario and Canadian building codes.</p>
         
        
        </Col>
        <Col>          <p class='content-paragraph'>If you need a render done for proof of concept or final presentation this is the place</p>
          </Col>
        <Col><p class='content-paragraph'>Prepare you a full set of interior renovation permit drawings, including architectural, structural, and other drawings that will help you stay on time.</p>
          </Col>

      </Row>
      <Row style={{paddingTop: "10px"}}>
        <Col>
        <div class="ui small primary button"><Link to="/Work" class='no-link-style'>Get Started</Link><i class="right arrow icon"></i></div>s
        </Col>
        <Col>
        <div class="ui small primary button"><Link to="/Work" class='no-link-style'>Get Started</Link><i class="right arrow icon"></i></div>
        </Col>
        <Col>
        <div class="ui small primary button"><Link to="/Work" class='no-link-style'>Get Started</Link><i class="right arrow icon"></i></div>
        </Col>
        <Col>
        <div class="ui small primary button"><Link to="/Work" class='no-link-style'>Get Started</Link><i class="right arrow icon"></i></div>
        </Col>
      </Row>
    </Container>
    </div>
  </div>



  <div class="pusher">
  <div id='header' class="ui inverted vertical masthead center aligned segment">

    <div class="ui text container">
      <h1 class="ui inverted header" id='upgrade-house-heading'>
        Ready to upgrade your house with our help?
      </h1>
      <Link to="/Contact" class='no-link-style'><div class="ui small primary button" id='contact-us-button'>Contact Us<i class="right arrow icon"></i></div></Link>
      <Link to="/Cost" class='no-link-style'><div class="ui small primary button" id='contact-us-button'>Get a Qoute<i class="right arrow icon"></i></div></Link>
    </div>

  </div>




    <Footer />
    </div>
  </div>
</div>
    );
}

export default Home;