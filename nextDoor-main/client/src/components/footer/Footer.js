import Instagram from "./icon/instagram.svg";
import Facebook from "./icon/facebook.svg";
import Twitter from "./icon/twitter.svg";
import Linkedin from "./icon/linkedin.svg";
import Youtube from "./icon/youtube.svg";
import React from "react";

function Footer() {
  return (
    <>
      <script
        src="https://kit.fontawesome.com/d54a90611f.js"
        crossorigin="anonymous"
      ></script>
      <footer className="footer-distributed">
        <div className="footer-left">
          <img src="img/logo.png" alt="" width= "70"/>
          <h3>
            About <span>NextDoor</span>
          </h3>

          <p className="footer-links">
            <a href="/">Home</a>|<a href="/blog">Blog</a>|
            <a href="about">About</a>|<a href="/contact">Contact</a>
          </p>

          <p className="footer-company-name">© 2023 NextDoor</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span> Kalyanpur, Kanpur </span>
             Uttar Pradesh- 208017
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+91 6386667687</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="priya:support@nextDoor.com">contact@nextDoor.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Get the best product from local business at your ease
          </p>
          <div className="footer-icons">
            <a href="facebook.com">
              <img src={Facebook} alt="" width="30" />
            </a>
            <a href="twitter.com">
              <img src={Twitter} alt="" width="30" />
            </a>
            <a href="instagram.com">
              <img src={Instagram} alt="" width="30" />
            </a>
            <a href="linkedin.com">
              <img src={Linkedin} alt="" width="30" />
            </a>
            <a href="youtube.com">
              <img src={Youtube} alt="" width="30" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
