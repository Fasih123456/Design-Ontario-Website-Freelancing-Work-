import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
const Work = () => {    
    return (
        <div class='active item'>
            <Header title='work' subtitle='work sub'/>
            Work page
            <Footer />
        </div>
      )
}

export default Work;