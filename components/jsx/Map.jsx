import { useEffect, useState } from 'react';
import '../css/Map.css';

function Map() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const mapOptions = {
            center: { lat: 47.5562, lng: 1.0518 },
            zoom: 4,
            styles: []
        };

        const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

        window.google.maps.event.addListenerOnce(map, 'idle', () => {
            setLoading(false);
        });
    }, []);

    return (
        <div className="map-wrapper">
            {loading && <div className="map-loader">Loading map...</div>}
            <div id="map" className="map-container" />
        </div>
    );
}

export default Map;