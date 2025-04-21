import React from 'react'
import './Hygiene.css'
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

function Hygiene() {
  return (
    <div className='hygiene-container'>
        <Element delay={0.0}>
            <h2 className='hygiene-title'>Règles d'hygiène et de sécurité</h2>
        </Element>
        <Element delay={0.2}>
            <div className="hygiene-section">
                <h3 className="section-title">Avant votre rendez-vous</h3>
                <ul className="hygiene-liste">
                    <li className="hygiene-item">Tout commence par une idée. Peut-être voulez-vous créer une entreprise.</li>
                    <li className="hygiene-item">Peut-être voulez-vous donner une nouvelle dimension à un passe-temps.</li>
                    <li className="hygiene-item">Ou peut-être avez-vous un projet créatif que vous souhaitez partager avec le monde entier.</li>
                    <li className="hygiene-item">Quel que soit le cas, la façon dont vous racontez votre histoire en ligne peut faire toute la différence.</li>
                    <li className="hygiene-item">Ne vous souciez pas d'avoir l'air professionnel. Soyez vous-même.</li>
                </ul>
            </div>
        </Element>
        <Element delay={0.4}>
            <div className="hygiene-section">
                <h3 className="section-title">Pendant votre rendez-vous</h3>
                <ul className="hygiene-liste">
                    <li className="hygiene-item">Il y a plus de <span className='numb'>1,5</span> milliard de sites web, mais c'est votre histoire qui vous différenciera.</li>
                    <li className="hygiene-item">Si, en relisant les mots, vous n’entendez pas votre propre voix dans votre tête, c’est le signe que vous avez encore du chemin à parcourir.</li>
                    <li className="hygiene-item">Soyez clair(e), ayez confiance et n'y réfléchissez pas trop.</li>
                    <li className="hygiene-item">La beauté de votre histoire, c'est qu'elle va continuer à évoluer et que votre site peut évoluer avec elle.</li>
                    <li className="hygiene-item">Votre objectif, c'est qu'il soit le reflet du moment présent.</li>
                    <li className="hygiene-item">La suite s'écrira d'elle-même. C’est toujours ainsi.</li>
                </ul>
            </div>
        </Element>
    </div>
  )
}

export default Hygiene