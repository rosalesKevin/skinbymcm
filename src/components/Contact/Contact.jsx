import React, { useState } from "react"; 
import styles from "./Contact.module.css";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
            
            // Clear success message after 3 seconds
            setTimeout(() => {
                setSubmitStatus('');
            }, 3000);
        }, 1000);
    };

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Get in Touch</h2>
                    <p className={styles.subtitle}>Ready to enhance your natural beauty? Let's start your journey together.</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoCard}>
                            <h3>Contact Information</h3>
                            
                            <div className={styles.contactItem}>
                                <div className={styles.icon}>📧</div>
                                <div>
                                    <h4>Email</h4>
                                    <p>hello@skinbymcm.com</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.icon}>📱</div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.icon}>📍</div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Downtown Beauty District<br />Available by appointment</p>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.icon}>⏰</div>
                                <div>
                                    <h4>Hours</h4>
                                    <p>
                                        Mon - Fri: 9:00 AM - 7:00 PM<br />
                                        Saturday: 10:00 AM - 6:00 PM<br />
                                        Sunday: By appointment only
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.socialLinks}>
                            <h4>Follow Us</h4>
                            <div className={styles.social}>
                                <a href="#" className={styles.socialLink}>Instagram</a>
                                <a href="#" className={styles.socialLink}>Facebook</a>
                                <a href="#" className={styles.socialLink}>TikTok</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <form onSubmit={handleSubmit} className={styles.contactForm}>
                            <h3>Book Your Appointment</h3>
                            
                            {submitStatus === 'success' && (
                                <div className={styles.successMessage}>
                                    ✨ Thank you! We'll contact you within 24 hours to confirm your appointment.
                                </div>
                            )}

                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="service">Service of Interest</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a service</option>
                                    <option value="hydragloss-lips">Hydragloss Lips</option>
                                    <option value="powder-brows">Powder Brows</option>
                                    <option value="hairstrokes-brows">Hairstrokes Brows</option>
                                    <option value="brow-lift">Brow Lift</option>
                                    <option value="deep-facial">Deep Facial Cleaning</option>
                                    <option value="bb-glow">BB Glow</option>
                                    <option value="korean-booster">Korean Skin Booster</option>
                                    <option value="consultation">Consultation</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us about your beauty goals or any questions you have..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className={styles.submitBtn}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Book Appointment'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}