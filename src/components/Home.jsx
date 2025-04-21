import React from 'react'
import './Home.css'
import { motion } from "framer-motion"

const Element = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: delay }}
  >
    {children}
  </motion.div>
);

function Home() {
  return (
    <div className='home-container'>
        <Element delay={0.0}>
        <section className='home'>
                <div className="home-infos">
                    <h2 className="home-title">Bienvenu au salon Amob</h2>
                    <div className="home-data">
                        <div className="home-address">
                            <p>123 RUE DÉMO</p> 
                            <p>NEW YORK, NY 12345</p>
                        </div>
                        <div className="home-contact">
                            <p>+212 6 55 44 33 22</p>
                            <p>E-MAIL@EXEMPLE.COM</p> 
                        </div>
                    </div>
                </div>
                
                <div className="home-img">
                    <img src="/images/home-photo.jpeg" alt="home-photo" />
                </div>
                
        </section>
        </Element>
        <Element delay={0.2}>
        <section className='about'>
            <div className="about-left">
                <div className="about-img">
                    <img src="/images/about-photo.jpeg" alt="about-photo" />
                </div>
            </div>
            <div className="about-right">
                <h2 className="about-title">
                    Une nouvelle vision du cheveu
                </h2>
                <p className='about-text'>
                    Tout commence par une idée. Peut-être voulez-vous créer une entreprise. Peut-être voulez-vous donner une nouvelle dimension à un passe-temps. Ou peut-être avez-vous un projet créatif que vous souhaitez partager avec le monde entier. Quel que soit votre cas, la façon dont vous racontez votre histoire en ligne peut faire toute la différence.
                </p>
                <button className="btn btn-outline-dark" type="submit">Découvet l'équipe</button>
            </div>
        </section>
        </Element>
        <Element delay={0.4}>
        <section className="service">
            <h2 className="service-title">Nos services</h2>
            <div className="service-container">
                <div className="service-item">
                    <h3 className="item-title">Coupes et coiffures</h3>
                    <button className="btn btn-outline-dark" type="submit">Nos services</button>
                </div>
                <div className="service-item">
                    <h3 className="item-title">Correction de couleur</h3>
                    <button className="btn btn-outline-dark" type="submit">Nos services</button>
                </div>
                <div className="service-item">
                    <div className='service-img'>
                        <img src="/images/services-image.jpeg" alt="" />
                    </div>
                </div>
                <div className="service-item">
                    <h3 className="item-title">Soins du cheveu</h3>
                    <button className="btn btn-outline-dark" type="submit">Nos services</button>
                </div>
            </div>
        </section>
        </Element>
        <Element delay={0.6}>
        <section className="home-goodby">
            <div className="home-img-container">
                <div className="home-footer-img">
                    <img src="/images/home-footer-1.jpeg" alt="" />
                </div>
                <div className="home-footer-img">
                    <img src="/images/home-footer-2.jpeg" alt="" />
                </div>
                <div className="home-footer-img">
                    <img src="/images/home-footer-3.jpeg" alt="" />
                </div>
                <div className="home-footer-img">
                    <img src="/images/home-footer-4.jpeg" alt="" />
                </div>
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
                    A Bientot !!
            </motion.h1>
            <button className="btn btn-outline-dark goodby-btn" type="submit">Prendre rendez-vous</button>
        </section>
        </Element>
    </div>
  )
}

export default Home