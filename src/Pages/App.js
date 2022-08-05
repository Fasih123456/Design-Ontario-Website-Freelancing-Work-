import React from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import Work from './Work';
import Contact from './Contact';
import costCalculations from './costCalculations';

import Home from './Home';


const App = () => {
    return(
        <div className='ui container'>
            <BrowserRouter>
              <React.Fragment>
                <Route path="/" exact  component={Home} />
                <Route path="/Work"  component={Work} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Cost" component={costCalculations} />
              </React.Fragment>
            </BrowserRouter>
        </div>
    );
};

export default App;