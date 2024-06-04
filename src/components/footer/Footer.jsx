import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">My Portfolio</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">Testimonial</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/kumkum_227" className="footer__social-link" target="_blank">
            <i class="uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/kumkum-sharma-903323224" className="footer__social-link" target="_blank">
            <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/kumkumshh" className="footer__social-link" target="_blank">
            <i class="uil uil-github-alt"></i>
            </a>
            </div>

            <span className="footer__copy">&#169; kumkumsharma. All rigths reserved</span>
        </div>
    </footer>
  )
};

export default Footer