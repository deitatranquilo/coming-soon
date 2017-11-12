import React from 'react';
import isotypeImg from '../../assets/images/isotype.png';

const Main = () => (
  <div className="main">
    <img src={isotypeImg} alt="deita tranquilo logo" />
    <div className="contact-links">
      <a href="http://qr.afip.gob.ar/?qr=TUnsNQGdgEe5sdkbuin7tA,," target="_F960AFIPInfo">
        <img className="icon-afip" src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg" alt="Fiscal Data" border="0" />
      </a>
      <a href="mailto:deitatranquilo@gmail.com" target="_blank" rel="noopener noreferrer">
        <i className="icon-mail" />
      </a>
      <a href="https://www.facebook.com/deitatranquilo" target="_blank" rel="noopener noreferrer">
        <i className="icon-facebook" />
      </a>
    </div>
  </div>
);

export default Main;
