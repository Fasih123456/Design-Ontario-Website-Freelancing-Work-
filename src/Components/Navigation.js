import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const currentLocation = window.location.href;
 
        switch(currentLocation){
            case 'http://localhost:3000/Contact':
                document.getElementById('page3').classList.add('active');

                document.getElementById('page1').classList.remove('active');
                document.getElementById('page2').classList.remove('active');
                document.getElementById('page4').classList.remove('active');
                break;
            case 'http://localhost:3000/Work':
                document.getElementById('page2').classList.add('active');

                document.getElementById('page1').classList.remove('active');
                document.getElementById('page3').classList.remove('active');
                document.getElementById('page4').classList.remove('active');
                break;
            case 'http://localhost:3000/Cost':
                document.getElementById('page4').classList.add('active');
    
                document.getElementById('page1').classList.remove('active');
                document.getElementById('page2').classList.remove('active');
                document.getElementById('page3').classList.remove('active');
                break;
            case 'http://localhost:3000/':
                document.getElementById('page1').classList.add('active');
    
                document.getElementById('page2').classList.remove('active');
                document.getElementById('page3').classList.remove('active');
                document.getElementById('page4').classList.remove('active');
                break;
            
            default:
                document.getElementById('page1').classList.add('active');
        }
    }

    render(){
    return (
        <React.Fragment>
            <Link to="/" class='active item' id='page1'>Home</Link>
            <Link to="/Work" class='item' id='page2'>Work</Link>
            <Link to="/Contact" class='item' id='page3'>Contact</Link>
            <Link to="/Cost" class='item' id='page4'>Cost Calculation</Link>
        </React.Fragment>
    );
    }
}

export default Navigation;