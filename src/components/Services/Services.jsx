import React from "react";
import styles from "./Services.module.css";

export const Services = () => {
  const services = [
    {
      title: "Hydragloss Lips",
      description: "A lip treatment that combines deep hydration with a natural tint for plump, juicy, glass-like lips.",
      benefits: [
        "Boosts hydration & smooths texture",
        "Enhances natural lip color",
        "Adds glossy, healthy glow",
        "Improves lip volume over time",
        "No filler, no downtime"
      ],
      highlight: "Plump. Glossy. Effortless.",
      price: "From $150"
    },
    {
      title: "Powder Brows",
      description: "Soft, makeup-like finish with long-lasting results. Perfect shape, no daily filling needed.",
      benefits: [
        "Long-lasting (1-3 years)",
        "Ideal for all skin types",
        "Smudge-proof & low maintenance",
        "Natural, soft appearance",
        "Customized to your face shape"
      ],
      highlight: "Flawless brows, 24/7.",
      price: "From $350"
    },
    {
      title: "Hairstrokes Brows",
      description: "Natural, hair-like finish perfect for sparse or thin brows with seamless blending.",
      benefits: [
        "Realistic hair-like strokes",
        "Perfect for sparse brows",
        "Custom shape and definition",
        "Blends with natural hair",
        "Long-lasting (12-18 months)"
      ],
      highlight: "Realistic. Refined. Ready every day.",
      price: "From $400"
    },
    {
      title: "Brow Lift",
      description: "Non-invasive treatment that lifts and shapes your brows for a more youthful, defined look.",
      benefits: [
        "Instant lifting effect",
        "No surgery required",
        "Enhances natural arch",
        "Long-lasting results",
        "Minimal downtime"
      ],
      highlight: "Lifted. Defined. Stunning.",
      price: "From $120"
    },
    {
      title: "Deep Facial Cleaning",
      description: "A purifying reset for your skin, removing buildup and restoring clarity from within.",
      benefits: [
        "Extracts dirt, oil, and impurities",
        "Reduces blackheads and breakouts",
        "Refines pores and smooths texture",
        "Leaves skin fresh and glowing",
        "Perfect prep for radiant skin"
      ],
      highlight: "Deep clean. Fresh glow.",
      price: "From $85"
    },
    {
      title: "BB Glow",
      description: "Semi-permanent foundation treatment infused through microneedling for instant and lasting luminosity.",
      benefits: [
        "Evens out skin tone naturally",
        "Reduces redness and dark spots",
        "Minimizes pores and smooths texture",
        "Delivers 'glass skin' finish",
        "Wake up glowing daily"
      ],
      highlight: "Wake up glowing—no makeup needed.",
      price: "From $180"
    },
    {
      title: "Korean Skin Booster",
      description: "Luxe fusion of microneedling and premium Korean serums for deep hydration and renewal.",
      benefits: [
        "Boosts collagen production",
        "Brightens tone and fades pigmentation",
        "Minimizes pores and refines texture",
        "Gives radiant, glass-skin glow",
        "Long-lasting hydration"
      ],
      highlight: "Powerful results. K-beauty perfection.",
      price: "From $220"
    }
  ];

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Signature Services</h2>
          <p className={styles.subtitle}>
            Discover our range of premium beauty treatments designed to enhance your natural radiance
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <span className={styles.servicePrice}>{service.price}</span>
              </div>
              
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <div className={styles.benefitsList}>
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className={styles.benefit}>
                    <span className={styles.checkmark}>✨</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className={styles.highlight}>
                <em>"{service.highlight}"</em>
              </div>
              
              <button className={styles.bookButton}>
                Book Now
              </button>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h3>Ready to Transform Your Look?</h3>
          <p>Book a consultation to discover which treatments are perfect for you</p>
          <a href="#contact" className={styles.ctaButton}>
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );
};