import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import styles from "./Services.module.css";

export const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/src/data/services.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div className={styles.services} id="services">
      <h1>Our Services</h1>
      <Swiper
        direction="vertical"
        modules={[Pagination, Mousewheel, EffectCreative]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, "-120%", -400],
            rotate: [30, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, "120%", -400],
            rotate: [-30, 0, 0],
          },
        }}
        pagination={{ clickable: true }}
        mousewheel
        spaceBetween={24}
        slidesPerView={1}
        className={styles.servicesSwiper}
        style={{ height: "400px", maxWidth: "420px" }}
      >
        {services.map((service, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.serviceCard}>
              <h2>{service.title}</h2>
              {service.description && <p>{service.description}</p>}
              {service.benefits && (
                <ul>
                  {service.benefits.map((benefit, bidx) => (
                    <li key={bidx}>{benefit}</li>
                  ))}
                </ul>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};