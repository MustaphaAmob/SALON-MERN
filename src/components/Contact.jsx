import React from 'react'
import './Contact.css'
import { motion } from "framer-motion";

const Element = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: delay }}
  >
    {children}
  </motion.div>
);

function Contact() {
  return (
    <div className='contact-container'>
        <Element delay={0.0}>
            <h1 className='contact-title'>Rendez-nous visite</h1>
        </Element>
        <Element delay={0.2}>
            <section className="contact-infos">
                <div className="horaire">
                    <p>Lundi : FERMÉ</p>
                    <p>Du mardi au vendredi : de 9 h à 19 h</p>
                    <p>Samedi et dimanche : de 10 h à 19 h</p>
                </div>
                <div className="address">
                    <p>123 Rue de Paris, Maarif, Casablanca</p>
                    <p>+212 6 44 33 22 11</p>
                    <p>e-mail@exemple.com</p>
                </div>
            </section>
        </Element>
        <Element delay={0.4}>
            <h1 className='contact-title'>Contactez-nous</h1>
        </Element>
        <Element delay={0.6}>
            <div className="contact-photo">
                <img src="/images/contact-photo.webp" alt="Photo d'une cliente" />
            </div>
        </Element>
        <Element delay={0.8}>
            <h1 className='contact-title'>À bientôt</h1>
        </Element>
    </div>
  )
}

export default Contact