import React from "react"; 
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.textSection}>
                        <h2 className={styles.title}>About Skin by MCM</h2>
                        <h3 className={styles.subtitle}>Enhancing Your Natural Beauty</h3>
                        
                        <p className={styles.description}>
                            At Skin by MCM, we believe that beauty is not about perfection—it's about 
                            enhancing your natural radiance and helping you feel confident in your own skin. 
                            Our expert esthetician specializes in advanced beauty techniques that deliver 
                            professional results with a personal touch.
                        </p>

                        <div className={styles.highlights}>
                            <div className={styles.highlight}>
                                <h4>Professional Excellence</h4>
                                <p>Certified in the latest beauty techniques and technologies</p>
                            </div>
                            <div className={styles.highlight}>
                                <h4>Personalized Care</h4>
                                <p>Tailored treatments designed for your unique needs</p>
                            </div>
                            <div className={styles.highlight}>
                                <h4>Premium Products</h4>
                                <p>Using only the finest Korean beauty innovations</p>
                            </div>
                        </div>

                        <div className={styles.mission}>
                            <h4>Our Mission</h4>
                            <p>
                                To provide luxurious, results-driven beauty treatments in a welcoming 
                                environment where every client leaves feeling beautiful, confident, and radiant.
                            </p>
                        </div>
                    </div>

                    <div className={styles.imageSection}>
                        <div className={styles.imageCard}>
                            <div className={styles.imagePlaceholder}>
                                {/* This would be where the actual image goes */}
                                <span>Professional Beauty Studio</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}