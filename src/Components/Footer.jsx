import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
             <footer className="footer-distributed">

<div className="footer-left">
    <h3>Thatix<span>Recopes</span></h3>

    <p className="footer-links">
        <Link to="">Home</Link>
        |
        <Link to="">About</Link>
        |
        <Link to="">Contact</Link>
        |
        <Link to="">Blog</Link>
    </p>

    <p className="footer-company-name">Copyright © 2021 <strong>SagarDeveloper</strong> All rights reserved</p>
</div>

<div className="footer-center">
    <div>
        <i className="fa fa-map-marker"></i>
        <p><span>Dhaka,</span>
            Bangladesh</p>
    </div>

    <div>
        <i className="fa fa-phone"></i>
        <p>+91 74**9**258</p>
    </div>
    <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
    </div>
</div>
<div className="footer-right">
    <p className="footer-company-about">
        <span>About the company</span>
        <strong>Sagar Developer</strong> is a Youtube channel where you can find more creative CSS Animations
        and
        Effects along with
        HTML, JavaScript and Projects using C/C++.
    </p>
    <div className="footer-icons">
        <Link to=""><i className="fa fa-facebook"></i></Link>
        <Link to=""><i className="fa fa-instagram"></i></Link>
        <Link to=""><i className="fa fa-linkedin"></i></Link>
        <Link to=""><i className="fa fa-twitter"></i></Link>
        <Link to=""><i className="fa fa-youtube"></i></Link>
    </div>
</div>
</footer>
        </div>
    );
};

export default Footer;