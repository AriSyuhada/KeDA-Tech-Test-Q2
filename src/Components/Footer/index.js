import React from "react";
import './index.scss';

const ICONS = {
  instagram: '/icons/instagram.png',
  twitter: '/icons/twitter.png',
  youtube: '/icons/youtube.png'
}

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="icons-wrapper">
        <img className="icon" src={ICONS.twitter} alt="twitter" />
        <img className="icon" src={ICONS.instagram} alt="instagram" />
        <img className="icon" src={ICONS.youtube} alt="youtube" />
      </div>
      <p className="copyright-text">All rights reserved, Start-App</p>
      <p className="date-text">Generated on September 11, 2023</p>
    </div>
  );
}