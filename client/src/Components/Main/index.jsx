import axios from "axios";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import React from "react";


function Main(){
	const [contact, newContact] = useState(null);


  //This function gets relevent information from API, it fetchs data everytime infomartion in API changes
  useEffect(() => {
    axios.get("https://engineers-canada.herokuapp.com/api").then((response) => {
      newContact(response.data)
    });
  }, ["https://engineers-canada.herokuapp.com/api"]);


	
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const getContactInformation = async () => {

		await axios.get('http://localhost:8080/api/contacts')
		.then((response) => {
			const data = response.data;
			this.setState({contacts: data})
		})

	}

	const displayContacts = (contacts) => {
		const arr = contacts.map((contact) => {
			return (
				<div>
				<h1>{contact.name}</h1>
				<h1>{contact.email}</h1>
				</div>
			)
		})

		return arr;
	}

	if(contact){
		return (
			<div className={styles.main_container}>
	
				<nav className={styles.navbar}>
					<h1>fakebook</h1>
	
					
					<button className={styles.white_btn} onClick={handleLogout}>
						Logout
					</button>
				</nav>
	
				{displayContacts(contact)}
				
			</div>
		);
	}else {
		return (
		  <div>
			<h1>No Models</h1>
		  </div>
		);
	  }
};

export default Main;