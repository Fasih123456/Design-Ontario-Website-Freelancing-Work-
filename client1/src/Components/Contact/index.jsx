import Header from '../Header';
import Footer from '../Footer';
import React from 'react';

import styles from "./styles.module.css";


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
                <p>+15147937039</p>
                </div>
                <div class="column">
                <p>Hours</p>
                <p>Monday to Friday 9am to 5pm</p>
                </div>
            </div>
            <div id='contact-page-secondary-component'>
            return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
            </div>
            <Footer />
        </div>
      )
};

export default Contact;