import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram";
import { IoLogoTwitter } from "@react-icons/all-files/io/IoLogoTwitter";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div>
        <ul>
          <li>Support</li>
          <li>Shipping</li>
        </ul>
      </div>
      <div className="copyright">
        <p>© 2023 Brand of Sacrifice</p>
      </div>
      <div>
        <ul>
          <li className="facebook">
            <Link to="https://www.facebook.com/brandofsacrificemetal">
              {" "}
              <FaFacebook size={40} color="black" fill="black" />
            </Link>{" "}
          </li>
          <li className="instagram">
            <Link to="https://www.instagram.com/brandofsacrificemetal/">
              {" "}
              <GrInstagram size={40} color="black" fill="black" />
            </Link>
          </li>
          <li className="twitter">
            <Link to="https://twitter.com/BrandOSacrifice">
              <IoLogoTwitter size={40} color="black" fill="black" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
