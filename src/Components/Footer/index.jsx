import React from 'react';
import Logo from './Logo';
import MenuFooter from './MenuFooter';
import SocialMedia from './SocialMedia';
import './style.css';

const Footer = () => {
    return(
        <footer class="footer">
            <div className="footer-container">
                <Logo />
                <MenuFooter />
                <SocialMedia />
            </div>
        </footer>
    );
}

export default Footer;
