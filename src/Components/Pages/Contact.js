import Header from "./Header";
import Footer from './Footer';
import React from 'react';
import FormExampleFieldControl from "./FormExampleFieldControl";

const Contact = () => {
    return (
        <div class='active item'>
            <Header 
            title='Contact Us' 
            />
            <div class="ui three column doubling stackable grid container work-page-body-containers">
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
            <FormExampleFieldControl />
            <Footer />
        </div>
      )
};

export default Contact;