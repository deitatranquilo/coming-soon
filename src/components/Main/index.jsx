import React from 'react';
import isotypeImg from '../../assets/images/isotype.png';

const Main = () => (
  <main>
    <img src={isotypeImg} alt="Deita Tranquilo Logo" />
    <div className="contact-links">
      <a href="http://qr.afip.gob.ar/?qr=TUnsNQGdgEe5sdkbuin7tA,," aria-label="Check our Fiscal Data" target="_F960AFIPInfo">
        <img className="icon-afip" src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg" alt="Fiscal Data" border="0" />
      </a>
      <a href="mailto:deitatranquilo@gmail.com" aria-label="Contact us by Email" target="_blank" rel="noopener noreferrer">
        <i className="icon-mail" />
      </a>
      <a href="https://www.facebook.com/deitatranquilo" aria-label="Visit us on Facebook" target="_blank" rel="noopener noreferrer">
        <i className="icon-facebook" />
      </a>
    </div>
  </main>
);

export default Main;
