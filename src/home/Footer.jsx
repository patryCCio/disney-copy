const Footer = () => {
  return (
    <footer className="section">
      <div className="footer">
        <picture className="footer-img">
          <source
            media="(min-width: 1025px)"
            srcset="//cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
          />
          <img
          className="img"
            src="//cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
            alt="Disney+ Logo"
            loading="lazy"
          />
        </picture>

        <div className="text-center">
          <ul className="footer-text">
            <li>Umowa subskrypcji</li>
            <li>Polityka prywatności</li>
            <li>Zasady ochrony prywatności w WB i UE</li>
            <li>Polityka dotycząca plików cookie</li>
            <li>Reklamy dostosowane do zainteresowań</li>
            <li>Obsługiwane urządzenia</li>
            <li>Centrum pomocy</li>
            <li>O nas</li>
            <li>Ustawienia preferencji</li>
          </ul>

          <p>
            &copy; 2023 Disney i podmioty powiązane. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
