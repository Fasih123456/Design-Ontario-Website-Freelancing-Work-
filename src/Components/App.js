import React from 'react';
import Home from './Pages/Home.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import costCalculations from './Pages/costCalculations';


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