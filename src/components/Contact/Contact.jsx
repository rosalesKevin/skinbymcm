import React from "react"; 
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <div className={styles.contact}>
            <h1>Contact Us</h1>
            <section>
                <h2>Get in Touch</h2>
                <p>If you have any questions or would like to book an appointment, please contact us.</p>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    );
}