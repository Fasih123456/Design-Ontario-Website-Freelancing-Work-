import Header from '../Components/Header'
import Footer from '../Components/Footer'
import React, {useState} from 'react';
import FormExampleFieldControl from '../Components/FormExampleFieldControl';

import './css/contact.css';


const Contact = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('')

    async function registerUser(event){
        event.preventDefault();
        fetch('http://localhost:8080/api/contact', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
        }).then((response) => {
            const data = response.json();
            console.log(data)
        })

    }
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
                <p>+15147937039</p>
                </div>
                <div class="column">
                <p>Hours</p>
                <p>Monday to Friday 9am to 5pm</p>
                </div>
            </div>
            <div id='contact-page-secondary-component'>
            <form onSubmit={registerUser}>
                <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="name"
                />
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
                />
                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                />
                            <input type="submit" value="Register" />
            </form>

            </div>
            <Footer />
        </div>
      )
};

export default Contact;