import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <React.Fragment>
            <Link to="/" class='active item'>Home</Link>
            <Link to="/Work" class='item'>Work</Link>
            <Link to="/Contact" class='item'>Contact</Link>
            <Link to="/Cost" class='item'>Cost Calculation</Link>
        </React.Fragment>
    );
}

export default Navigation;