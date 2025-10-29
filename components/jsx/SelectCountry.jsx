import { useState, useEffect } from 'react';
import CountryInfo from './CountryInfo.jsx';
import '../css/SelectCountry.css';
import '../../src/App.css'

function SelectCountry() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://corsproxy.io/?https://www.apicountries.com/countries');
        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const list = response.data || response; setCountries(list);
                setCountries(list);

                const finland = list.find(c => c.name === 'Finland');
                if (finland) {
                    setSelectedCountry(finland);
                }
            }
        };
        xhr.send();
    }, []);

    const handleChange = (e) => {
        const country = countries.find(c => c.name === e.target.value);
        setSelectedCountry(country);
    };

    return (
        <div className="countrySection" id="select-country">

            <div className="left">
                <h1>Opiskele eri valtioiden maantietoa</h1>

                <p>
                    Eri valtioiden maantieto on tärkeä osata jos on esimerkiksi menossa sinne reissuun.
                    Siksipä tästä löytyy tärkeimmät tiedot joka valtiosta sekä sille valtiolle linkki wikipediaan,
                    josta voit lukea lisää! Aloita valitsemmalla valtio alhaalla olevasta painikkeesta!
                </p>

                <form>
                    <label htmlFor="country-select">Valitse maa: </label>
                    <select id="country-select" onChange={handleChange} value={selectedCountry?.name || ''}>
                        <option value="">-- Valitse maa --</option>
                        {countries.map(c => (<option key={c.name} value={c.name}>{c.name}</option>
                        ))}
                    </select>
                </form>

            </div>

            <div className="right">
                {selectedCountry && <CountryInfo country={selectedCountry} />}
            </div>
        </div>
    );
}

export default SelectCountry;
