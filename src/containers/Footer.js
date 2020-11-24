import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <h3 className="footer__data">© Amity University Patna</h3>

      <a href="/developers">
        <h3 className="footer__last">
          Developed and managed by R&D B.Tech CSE (III) Sem
        </h3>
      </a>
    </div>
  );
}

export default Footer;
