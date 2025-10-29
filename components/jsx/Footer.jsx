import '../css/Footer.css';
import '../../src/App.css';

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="footer-columns">
                <div className="footer-left">
                    <h3><i className="fa-solid fa-photo-film"></i> Kuvat</h3>
                    <p>
                        Kaikki kuvat ovat peräisin <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a> sivustolta, ilmainen kuvapankki projekteihin.
                    </p>
                </div>
                <div className="footer-right">
                    <div className="first">
                        <h3><i className="fa-solid fa-globe"></i> API</h3>
                        <p>
                            Valtioiden tiedot saatiin <a href="https://www.apicountries.com/countries" target="_blank" rel="noopener noreferrer">API Countries</a> -rajapinnasta.
                        </p>
                    </div>
                    <div className="second">
                        <p>
                            Google Maps kartta saatiin <a href="https://developers.google.com/maps" target="_blank" rel="noopener noreferrer">Google Maps API</a> -rajapinnasta.
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-note">
                    Tämä sivu on osa henkilökohtaista projektia. Lähteet ovat julkisesti saatavilla.
                </p>
                <div className="footer-icons">
                    <a href="https://github.com/Eemi00" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://geronimo.okol.org/~illeem/portfolio" target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-briefcase"></i>
                    </a>
                </div>
                <p className="footer-credit">
                    &copy; {new Date().getFullYear()} Eemi
                </p>
            </div>
        </footer>
    );
}

export default Footer;