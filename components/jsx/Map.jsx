import { useEffect, useState } from "react";
import "../css/Map.css";

function Map() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if script already exists
        if (!window.google) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
            script.async = true;
            script.defer = true;
            script.onload = () => {
                initMap();
            };
            document.body.appendChild(script);
        } else {
            initMap();
        }

        function initMap() {
            const mapOptions = {
                center: { lat: 47.5562, lng: 1.0518 },
                zoom: 4,
                styles: [],
            };

            const map = new window.google.maps.Map(
                document.getElementById("map"),
                mapOptions
            );

            window.google.maps.event.addListenerOnce(map, "idle", () => {
                setLoading(false);
            });
        }
    }, []);

    return (
        <div className="map-wrapper">
            {loading && <div className="map-loader">Loading map...</div>}
            <div id="map" className="map-container" />
        </div>
    );
}

export default Map;