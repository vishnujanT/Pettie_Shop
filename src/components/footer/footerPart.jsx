import React from 'react';
import './footerPart.css';

const FooterPart = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="row">
        <div className="col">
          <ul>
            <li>Contact us</li>
            <li>order tracking</li>
            <li>Order return</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Our story</li>
            <li>Careers</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Terms of Service | Privacy Policy | Contact Us</li>
          </ul>
        </div><div className="col">
          <ul>
            <li>shipping and delivery </li>
            <li>order status</li>
            <li>return status</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>+94 23 (555) 5858</li>
            <li>pettiesrilanka@gmail.lk</li>
            <li>Colombo, Srilanka</li>
          </ul>
        </div>
      </div>
      <p>&copy; 2024|| All Rights Reserved by ShopPettie.com</p>
    </footer>
  );
};

export default FooterPart;