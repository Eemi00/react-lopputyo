import React, { useState } from 'react';
import '../css/Header.css';
import '../../src/App.css'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const headerLinks = [
        { text: 'Valitse maa', id: 'select-country' },
        { text: 'Galleria', id: 'gallery' },
        { text: 'Kartta', id: 'map' }
    ];

    return (
        <header>
            <h1 className="header-title">GEOWIKI</h1>

            <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
                <ul className="header-list">
                    {headerLinks.map((link) => (
                        <a key={link.id} href={`#${link.id}`}>
                            <li>{link.text}</li>
                        </a>
                    ))}
                </ul>
            </nav>

            <a href="#footer" className="header-btn">Lähteet</a>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}

export default Header;