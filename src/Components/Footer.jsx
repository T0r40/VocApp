import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation('common');
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/norlivaalonso/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/T0r40">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p>{t('Footer.texto')}</p>
    </footer>
  );
};

export default Footer;
