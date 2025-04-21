import React, { useState } from 'react'
import './Service.css'
import { motion } from "framer-motion"
import Marquee from "react-fast-marquee";

const Element = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: delay }}
  >
    {children}
  </motion.div>
);

const ScrollingText = () => {
    return (
      <Marquee gradient={true} gradientWidth={100} speed={50}>
        🔥 Texte qui se répète 🔥 Texte qui se répète 🔥 Texte qui se répète 🔥 Texte qui se répète 🔥
      </Marquee>
    );
  };

function Service() {

    const services = [
        {
            id: 1,
            name: "COUPES DE CHEUVEUX",
            products: [
                { name: "Coupes", price: "110-150" },
                { name: "Frange", price: "15-20" },
                { name: "Coupe Buzz cut", price: "60" }
            ]
        },
        {
            id: 2,
            name: "COULEUR",
            products: [
                { name: "Opération simple", price: "110-150" },
                { name: "Mèches tête complète", price: "110-130" },
                { name: "Mèches demi-tête", price: "120-180" },
                { name: "Balayage", price: "180-250" },
                { name: "Gloss", price: "70-90" }
            ]
        },
        {
            id: 3,
            name: "COIFFURES",
            products: [
                { name: "Brushing", price: "45" },
                { name: "Défrisage", price: "180-250" }
            ]
        },
        {
            id: 4,
            name: "SOINS",
            products: [
                { name: "Traitement", price: "60-90" },
                { name: "Kératine", price: "110-140" },
                { name: "Cuir chevelu", price: "60-90" }
            ]
        }
    ]

    const [selectedService, setSelectedService] = useState(services[0])

  return (
    <div className='services'>
        <Element delay={0.0}>
            <h2 className="services-title">Nos Services</h2>
        </Element>
        <div className='services-container'>
            <Element delay={0.2}>
                <div className="services-left">
                    <div className="services-wrapper">
                        <div className="services-menu">
                            {services.map((service) => (
                                <button 
                                    key={service.id} 
                                    className={`btn-service ${selectedService.id === service.id ? 'selected' : ''}`}
                                    onClick={() => setSelectedService(service)}
                                >
                                    {service.name}
                                </button>
                            ))}
                        </div>

                        <div className="services-price">
                            {selectedService && (
                                <div className="service-details">
                                    <h3 className='service-name'>{selectedService.name}</h3>
                                    <div className='services-list'>
                                        {selectedService.products.map((product, index) => (
                                            <> 
                                                <div className='services-item'>
                                                    <h3 key={index} className='service-tag'>{product.name}</h3>
                                                    <p className='service-price'>{product.price} €</p>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Element>
            <Element delay={0.2}>
                <div className="services-right">
                    <div className="services-photo-container">
                        <img className='services-pic' src="/images/services-photo.webp" alt=""  />
                    </div>
                </div>
            </Element> 
        </div>
        <motion.h1 className='moving-text'
                initial={{ x: "-100%", opacity: 0 }} 
                animate={{ x: "100%", opacity: 1 }}
                exit={{ x: "150%", opacity: 0 }}
                transition={{ 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    duration: 7, 
                    ease: "linear",
                    opacity: { duration: 1 }
                }}
                style={{ whiteSpace: "nowrap" }}
                >
                Bienvenue !!
        </motion.h1>
    </div>
  )
}

export default Service