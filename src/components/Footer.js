import React from 'react'
import Logo from '../images/footerlogo.png'
import { Link } from 'react-router-dom'
import SocialLink from './SocialLink'
import { socialLinks } from '../data'

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="section-center footer-center">
          <div className="footer-img">
            <img src={Logo} className="footer-photo" alt="awesome food" />
          </div>

          <div className="footer-navigation">
            <h1 className="footer-header">Navigation</h1>
            <ul className="footer-links">
              <Link to="/">Home</Link>
              <Link to="../#about">About</Link>
              <a
                href={require('../../src/menu.pdf')}
                target="_blank"
                rel="noreferrer"
              >
                Menu
              </a>
              <Link to="/reservations">Reservations</Link>
              <Link to="/order">Order</Link>
              <Link to="/login">Login</Link>
            </ul>
          </div>
          <div className="footer-navigation">
            <h1 className="footer-header">Contact</h1>
            <ul className="footer-links">
              <li>1234 Chilko Ave, Vancouver, BC</li>
              <li>phone: 604-555-5555</li>
              <li>email: littlelemnon@gmail.com</li>
            </ul>
          </div>
          <div className="footer-navigation footer-extra-space">
            <h1 className="footer-header">Social Media Links</h1>
            <ul className="footer-icons">
              {socialLinks.map((link) => {
                return (
                  <SocialLink {...link} key={link.id} itemClass="footer-icon" />
                )
              })}
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2024 Little Lemon Ltd. All rights reserved.</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
