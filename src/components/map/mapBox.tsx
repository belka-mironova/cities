import React, { useRef } from "react";
import { Map, NavigationControl } from "react-map-gl";
import maplibregl from "maplibre-gl";

export const MapBox = () => {
  const mapRef = useRef(null);
  const API_KEY: string = "GU4MPQ5iNxp41sph03wQ";

  return (
    <>
      <Map
        mapLib={maplibregl}
        mapStyle={`https://api.maptiler.com/maps/positron/style.json?key=${API_KEY}`}
        style={{ width: "100vw", height: "100vh" }}
        initialViewState={{
          latitude: 57.6,
          longitude: 39.93,
          zoom: 8,
        }}
        ref={mapRef}
      >
        <NavigationControl position="top-left" />
      </Map>
    </>
  );
};
