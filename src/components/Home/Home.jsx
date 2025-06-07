import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import styles from './Home.module.css';

import img1 from '@assets/home/img1.png';
import img2 from '@assets/home/img2.png';
import img3 from '@assets/home/img3.png';
import logo from '@assets/nav/logo.png';

export const Home = () => {
  return (
    <section className={styles.home}>
      <Swiper
        className={styles.backgroundSwiper}
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {[img1, img2, img3].map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`slide-${idx}`} className={styles.slideImage} />
          </SwiperSlide>
        ))}
      </Swiper>

        <div className={styles.overlay}>
        <img src={logo} alt="Site Logo" className={styles.logoAbove} />
          <h1>Beauty Esthetics</h1>
          <p>
            Enhance your natural glow with our luxury beauty treatments.
          </p>
          <div className={styles.readyGlow}>
            <span className={styles.ready}>READY.</span>
            <span className={styles.getSet}>GET SET.</span>
            <span className={styles.glow}>GLOW.</span>
          </div>
          <div className={styles.buttons}>
            <a href="#contact" className={styles.button}>Book now</a>
            <a href="#services" className={styles.buttonOutline}>Our Services</a>
          </div>
        </div>

    </section>
  );
};
