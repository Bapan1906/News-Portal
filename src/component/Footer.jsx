import React from "react";
import { Link } from "react-router-dom";
import "../Css/Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-5 col-12">
            <div className="heading"> The Flash Bulletin.com </div>
            <p>
              Residents unite to save a historic landmark from demolition.
              Analysts forecast steady growth despite global uncertainties.
              Plant-based diets reduce chronic disease rates and improve health.
            </p>
          </div>

          <div className="col-md-6 col-lg-3 col-12">
            <div className="heading-2"> Company</div>
            <ul>
              <li className="nav-itemnav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Privacy Policy
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Feedback
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Newsletter
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 col-12">
            <div className="Heading-3"> Contact Us </div>
            <ul className="contactInfo">
              <li className="Phone">(+91) (011) 41605781, 41605958</li>
              <li className="email"> bulletin@news.ac.in</li>
            </ul>
            <div className="heading-4"> Follow Us </div>
            <div className="footerIcon">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <div className="copyright">
              &copy; 2024 The Flash Bulletin.com. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
