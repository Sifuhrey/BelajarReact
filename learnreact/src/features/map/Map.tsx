import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

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
            <Marker position={position} >
                <Popup>{location.name}</Popup>
            </Marker>
        </MapContainer> 
  )
}

export default Map