import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
const locationIcon = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});
export type Location = {
    lat: number;
    lon: number;
    name: string;
};

function MapUpdater({ lat, lon }: { lat: number; lon: number }) {
    const map = useMap();

    useEffect(() => {
        map.setView([lat, lon]);
    }, [map, lat, lon]);

    return null;
}

function Map({ location }: { location: Location }) {
    const position: [number, number] = [location.lat, location.lon];
    return (
        <MapContainer
            center={position} zoom={13} className="h-screen w-full">
            <MapUpdater lat={location.lat} lon={location.lon} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={locationIcon}>
                <Popup>{location.name}</Popup>
            </Marker>
        </MapContainer> 
  )
}

export default Map