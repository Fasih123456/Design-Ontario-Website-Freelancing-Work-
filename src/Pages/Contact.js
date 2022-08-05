import Header from '../Components/Header'
import Footer from '../Components/Footer'
import React from 'react';
import FormExampleFieldControl from '../Components/FormExampleFieldControl';

import './css/contact.css';

const Contact = () => {
    return (
        <div class='active item'>
            <div id='contact-page-header'>
            <Header 
            title='Contact Us' 
            />
            </div>
            <div class="ui three column doubling stackable grid container" id="contact-page-primary-component">
                <div class="column">
                <p>Address:</p>
                <p>235 south end street, OakVallie, Hudson Bay. </p>
                </div>
                <div class="column">
                <p>Phone:</p>
                <p>+148596340</p>
                </div>
                <div class="column">
                <p>Hours</p>
                <p>Monday to Friday 9am to 5pm</p>
                </div>
            </div>
            <div id='contact-page-secondary-component'>
            <FormExampleFieldControl />
            </div>
            <Footer />
        </div>
      )
};

export default Contact;