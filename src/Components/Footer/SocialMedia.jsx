import React from 'react';
import './style.css';
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiTwitter } from "react-icons/si";

const SocialMedia = () => {
    return(
        <div className="socialmedia">
            <h6 class="footer-title-bottom">Nuestras Redes</h6>
            <div class="footer-bottom">
                <div class="footer-list footer-list-bottom">
                    <a href="#" class="footer-icon-link">
                        <SiInstagram/>
                    </a>
                    <a href="#" class="footer-icon-link">
                        <SiFacebook/> 
                    </a>
                    <a href="#" class="footer-icon-link">
                        <SiTwitter/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;