import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ packageDetails }) {
  const {
    location_coordinate_latitude: latitude,
    location_coordinate_longitude: longitude,
  } = packageDetails;
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{}</Popup>
      </Marker>
    </MapContainer>
  );
}
