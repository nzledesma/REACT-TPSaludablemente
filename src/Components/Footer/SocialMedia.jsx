import React from 'react';
import './style.css';
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiTwitter } from "react-icons/si";

const SocialMedia = () => {
    return(
        <div className="socialmedia">
            <h6 className="footer-title-bottom">Nuestras Redes</h6>
            <div className="footer-bottom">
                <div className="footer-list footer-list-bottom">
                    <a href="http://www.instagram.com" class="footer-icon-link" target="_blank">
                        <SiInstagram/>
                    </a>
                    <a href="http://www.facebook.com" class="footer-icon-link" target="_blank">
                        <SiFacebook/> 
                    </a>
                    <a href="http://www.twitter.com" class="footer-icon-link" target="_blank">
                        <SiTwitter/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;