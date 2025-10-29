import { useEffect, useState } from 'react';
import '../css/CountryInfo.css';
import '../../src/App.css';

function CountryInfo({ country }) {
  const [loading, setLoading] = useState(true);
  const [visibleCountry, setVisibleCountry] = useState(null);

  useEffect(() => {
    if (!country) return;

    // Loader jotta kuvat ja tiedot kerkeää ladata käyttäjälle
    setLoading(true);
    const timer = setTimeout(() => {
      setVisibleCountry(country);
      setLoading(false);
    }, 1250);

    return () => clearTimeout(timer);
  }, [country]);

  if (!country || loading) {
    return (
      <div className="country-info loader">
        <p>Ladataan tietoja...</p>
      </div>
    );
  }

  return (
    // Valitun maan oikeat tiedot jotka haetaan rajapinnasta
    <div key={visibleCountry.name} className="country-info">
      <h1>{visibleCountry.name}</h1>

      <img src={visibleCountry.flag} alt={`Flag of ${visibleCountry.name}`} width="150" />
      <p><strong>Pääkaupunki:</strong> {visibleCountry.capital}</p>
      <p><strong>Maanosa:</strong> {visibleCountry.region}</p>
      <p><strong>Väkiluku:</strong> {visibleCountry.population.toLocaleString()}</p>
      <p><strong>Pinta-ala:</strong> {visibleCountry.area} km²</p>

      <p><strong>Valuutta:</strong> {
        visibleCountry.currencies.map((cur, index) => (
          <span key={index}>
            {cur.name} ({cur.code}) {cur.symbol}
          </span>
        ))
      }</p>

      <p><strong>Kielet:</strong> {
        visibleCountry.languages.map((lang, index) => (
          <span key={index}>
            {lang.name}{index < visibleCountry.languages.length - 1 ? ', ' : ''}
          </span>
        ))
      }</p>

      <p><strong>Aikavyöhykkeet:</strong> {visibleCountry.timezones.join(', ')}</p>
      <p><strong>Internet domain:</strong> {visibleCountry.topLevelDomain}</p>
      <p><strong>Puhelinkoodi(t):</strong> {visibleCountry.callingCodes.join(', ')}</p>
      <p><strong>Naapurimaat:</strong> {visibleCountry.borders?.join(', ') || 'Ei naapurimaita'}</p>

      <a target="_blank" href={`https://en.wikipedia.org/wiki/${visibleCountry.name}`}>
        <p><strong>Wikipedia linkki</strong></p>
      </a>
    </div>
  );
}

export default CountryInfo;