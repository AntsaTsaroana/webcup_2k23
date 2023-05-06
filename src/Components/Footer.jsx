import React from "react";
import { Link } from "react-router-dom";

import "../Assets/css/footer.scss";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer__addr">
          <div style={{ fontWeight: "900", color: "white" }}>
            <span
              style={{
                color: "#3A677C",
                paddingLeft: "5px",
                fontWeight: "bolder",
              }}
            >
              N
            </span>{" "}
            OFY
          </div>

          <h2>Contact</h2>

          <address>
            Dream Somewhere In. The World 
            <br />
            <a class="footer__btn" href="mailto:example@gmail.com">
              Email
            </a>
          </address>
        </div>

        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">Media</h2>

            <ul class="nav__ul">
              <li>
                <Link to="#">Facebook</Link>
              </li>

              <li>
                <Link to="#">Instagram</Link>
              </li>

              <li>
                <Link to="#">Instagram</Link>
              </li>
            </ul>
          </li>

          <li class="nav__item nav__item--extra">
            <h2 class="nav__title">Menu</h2>

            <ul class="nav__ul nav__ul--extra">
              <li>
                <Link to="/">Accueil</Link>
              </li>

              <li>
                <Link to="/service">Consultation</Link>
              </li>

              <li>
                <Link to="/about">A propos</Link>
              </li>

              <li>
                <Link to="/contactUs">Contactez-nous</Link>
              </li>
            </ul>
          </li>

          <li class="nav__item">
            <h2 class="nav__title">Légal</h2>

            <ul class="nav__ul">
              <li>
                <Link to="#">Conditions générales d'utilisation</Link>
              </li>

              <li>
                <Link to="#">Politique de confidentialité</Link>
              </li>
            </ul>
          </li>
        </ul>

        <div class="legal">
          <p>&copy; 2023 <strong style={{color:"#3A677C"}}>Retina</strong>. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
