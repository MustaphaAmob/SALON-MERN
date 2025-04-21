import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer-container">
            <div className="footer-section">
                <h2 className="title">HORAIRES D'OUVERTURE</h2>
                <div className="section-infos">
                    <p>Lundi : FERMÉ</p>
                    <p>Du mardi au vendredi : de 09 h à 19 h</p>
                    <p>Samedi et dimanche : de 10 h à 19 h</p>
                </div>
                <address className="section-infos">
                    <p>123 RUE DE PARIS - MAARIF</p>
                    <p>CASABLANCA - MAROC</p>
                    <p>TEL : +212 6 44 00 33 22</p>
                </address>
            </div>
            <div className="footer-section">
                <h2 className="title">MENU</h2>
                <ul className="section-links">
                    <li><Link className="link" to='/services'>Services</Link></li>
                    <li><a className="link">Equipe</a></li>
                    <li><Link className="link" to='/hygiene'>Hygiène et sécurité</Link></li>
                    <li><a className="link">Portfolio</a></li>
                    <li><Link to='/contact' className="link">Contact</Link></li>
                </ul>
            </div>
            <div className="footer-section">
                <h2 className="title">NOUS SUIVRE</h2>
                <ul className="section-links">
                    <li><a href="" className="link">Instagram</a></li>
                    <li><a href="" className="link">Facebook</a></li>
                    <li><a href="" className="link">Twitter</a></li>
                    <li><a href="" className="link">Pinterest</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer