import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Slideshow from './SlideShow';
import 'react-slideshow-image/dist/styles.css'

import '../App.css';
const Work = () => {    
    return (
        <div>
        <Header title='placeholder' subtitle='placeholder subtitle' />
        <div class="ui one cards">
            <div class="card">
                <div class="image">
                <Slideshow />
                </div>
                <div class="extra">
                Rating:
                <div class="ui star rating" data-rating="4"></div>
                </div>
            </div>
            <div class="card">
                <div class="image">
                <img />
                </div>
                <div class="extra">
                Rating:
                <div class="ui star rating" data-rating="2"></div>
                </div>
            </div>
            <div class="card">
                <div class="image">
                <img />
                </div>
                <div class="extra">
                Rating:
                <div class="ui star rating" data-rating="3"></div>
                </div>
            </div>
            <div class="card">
                <div class="image">
                <img />
                </div>
                <div class="extra">
                Rating:
                <div class="ui star rating" data-rating="4"></div>
                </div>
            </div>
            <div class="card">
                <div class="image">
                <img />
                </div>
                <div class="extra">
                Rating:
                <div class="ui star rating" data-rating="3"></div>
                </div>
            </div>
            <div class="card">
                <div class="image">
                <img />
                </div>
                <div class="extra">
                Rating:
                <div class="ui star rating" data-rating="3"></div>
                </div>
            </div>
            <div class="card">
                <div class="image">
                <img />
                </div>
                <div class="extra">
                Rating:
                <div class="ui star rating" data-rating="4"></div>
                </div>
            </div>
            <div class="card">
                <div class="image">
                <img />
                </div>
                <div class="extra">
                Rating:
                <div class="ui star rating" data-rating="4"></div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
      );
}





export default Work;