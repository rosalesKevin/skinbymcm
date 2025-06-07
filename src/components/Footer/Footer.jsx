import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h3 className={styles.brandName}>Skin by MCM</h3>
            <p className={styles.brandTagline}>
              Enhancing your natural beauty with professional expertise and premium Korean beauty innovations.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <span className={styles.socialIcon}>📷</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <span className={styles.socialIcon}>📘</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="TikTok">
                <span className={styles.socialIcon}>🎵</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="WhatsApp">
                <span className={styles.socialIcon}>💬</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Our Services</h4>
            <ul className={styles.linksList}>
              <li><a href="#services">Hydragloss Lips</a></li>
              <li><a href="#services">Powder Brows</a></li>
              <li><a href="#services">BB Glow</a></li>
              <li><a href="#services">Korean Skin Booster</a></li>
              <li><a href="#services">Deep Facial Cleaning</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Get in Touch</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <span>hello@skinbymcm.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>Downtown Beauty District</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>⏰</span>
                <span>Mon-Fri: 9AM-7PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <h4>Stay Beautiful with Our Newsletter</h4>
            <p>Get beauty tips, exclusive offers, and the latest updates delivered to your inbox.</p>
          </div>
          <div className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Enter your email address"
              className={styles.emailInput}
            />
            <button className={styles.subscribeBtn}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Skin by MCM. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <a href="#" className={styles.legalLink}>Privacy Policy</a>
              <a href="#" className={styles.legalLink}>Terms of Service</a>
              <a href="#" className={styles.legalLink}>Cookie Policy</a>
            </div>
          </div>
          <div className={styles.creditLine}>
            <p>Made with ✨ for beautiful souls</p>
          </div>
        </div>
      </div>
    </footer>
  );
};