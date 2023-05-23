import React from 'react';
import Logo from './Logo';
import MenuFooter from './MenuFooter';
import SocialMedia from './SocialMedia';
import './style.css';

export const Footer = () => {
    return(
        <div class="footer">
            <div className="footer-container">
                <Logo />
                <MenuFooter />
                <SocialMedia />
            </div>
        </div>
    );
}