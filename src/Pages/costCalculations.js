import Header from '../Components/Header'
import Footer from '../Components/Footer'

import TableExampleStructured from '../Components/TableExampleStructured';

import './css/costCalculations.css';

const costCalculations = () =>{
    return (
        <div class='active item'>
            <Header title='Know Your Prices' />
            
            <div id='cost-page-body' style={{paddingTop: "10px"}}>



            {/* ======= Pricing Section ======= */}
  <section id="pricing" class="pricing" >
    <div class="container" style={{paddingTOp: "10px"}}>

      <div class="section-title" style={{paddingBottom: "20px"}}>
        <h2>Deck Drawings</h2>
        <p>Get your new deck drawings</p>
      </div>

      <div class="row">

        <div class="col-lg-4 col-md-6">
          <div class="box">
            <h3>Small</h3>
            <h4><sup>$</sup>150<span></span></h4>
            <ul>
              <li>Project Size(sq ft): 107</li>
              <li>Number of 2D Drawings: 2</li>
              <li>Number Of Revisions: 2</li>
              <li>High Level Of Detail</li>
              <li>Graphic Echacements</li>
              <li>Include Layout Sheets</li>
              <li>Delivery Time: 14 Days</li>
            </ul>
            <div class="btn-wrap">
              <a href="contact" class="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
          <div class="box featured">
            <h3>Medium</h3>
            <h4><sup>$</sup>200<span> </span></h4>
            <ul>
            <li>Project Size(sq ft): 107</li>

            <li>Number of 2D Drawings: 4</li>
            <li>Number Of Revisions: 2</li>
            <li>High Level Of Detail</li>
              <li>Graphic Echacements</li>
              <li>Include Layout Sheets</li>

              <li>Delivery Time: 14 Days</li>
            </ul>
            <div class="btn-wrap">
              <a href="contact" class="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
          <div class="box">
            <h3>Large</h3>
            <h4><sup>$</sup>300<span> </span></h4>
            <ul>
            <li>Project Size(sq ft): 107</li>

            <li>Number of 2D Drawings: 6</li>
            <li>Number Of Revisions: 4</li>
            <li>High Level Of Detail</li>
              <li>Graphic Echacements</li>
              <li>Include Layout Sheets</li>

              <li>Delivery Time: 14 Days</li>
            </ul>
            <div class="btn-wrap">
              <a href="contact" class="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>{/* End Pricing Section */}

            </div>
            <Footer />
        </div>
      )
};

export default costCalculations;