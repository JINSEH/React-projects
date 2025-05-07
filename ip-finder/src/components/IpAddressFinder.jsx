import styles from "../modules/ipaddressfinder.module.css";
import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

export default function IpAddressFinder() {
  const markerRef = useRef();

  const [information, setInformation] = useState({
    location: "",
    isp: "",
    ipaddress: "",
  });

  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  });

  const findIp = async () => {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    setInformation({ ...information, ipaddress: data.ip });
    await findInfo(data.ip);
  };

  const findInfo = async (ip) => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_qLL7lhWxEtwaGgx0EHzNC5ZW4t6Up&ipAddress=${ip}`
    );
    const receivedData = await res.json();
    setInformation({
      ipaddress: ip,
      location: `${receivedData.location.city}, ${receivedData.location.country}`,
      isp: receivedData.as.name,
    });
    setViewState((prev) => ({
      ...prev,
      longitude: receivedData.location.lng,
      latitude: receivedData.location.lat,
      zoom: 14,
    }));
  };
  useEffect(() => {
    findIp();
  }, []);

  useMemo(() => {
    viewState, setViewState;
  }, [viewState]);

  return (
    <div className={styles.ipaddressfinder}>
      {/* First div is for IP Address Information */}
      <div className={styles.information}>
        <h4>What is my IPv4 address?</h4>
        <p>{information.ipaddress}</p>

        <h4>Approximate Location: </h4>
        <p>{information.location}</p>

        <h4>Internet Service Provider(ISP):</h4>
        <p>{information.isp}</p>
      </div>

      {/* Second Div is for Map */}
      <div id={styles.map}>
        <Map
          // https://visgl.github.io/react-map-gl/docs/get-started/mapbox-tokens
          mapboxAccessToken="pk.eyJ1IjoiZWRhZXdvbiIsImEiOiJjbWE3dTJ1OWYwajhiMmtvYXh0dWVxZWdtIn0.2r5MERJ37Hpls4reC1U7LA"
          {...viewState}
          style={{ width: 600, height: 300 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker
            longitude={viewState.longitude}
            latitude={viewState.latitude}
            color="blue"
            ref={markerRef}
          />
        </Map>
      </div>
    </div>
  );
}
