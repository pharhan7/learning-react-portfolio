/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Farhan</h1>

            <ul className="footer__list">

                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

            </ul>

            <div className="footer__social">

            <a href="mailto:developerfarhan7@gmail.com" className="home_social-icon" target='_blank'>
                <i class="uil uil-envelope"></i>
            </a>

            <a href="https://github.com/pharhan7" className="home_social-icon" target='_blank'>
                <i class="uil uil-github"></i>
            </a>
            
            <a href="https://www.linkedin.com/in/farhansaifi" className="home_social-icon" target='_blank'>
                <i class="uil uil-linkedin"></i>
            </a>

            </div>

            <span className="footer__copy">
                &#169; Farhan | All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer