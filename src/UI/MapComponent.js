import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import Map, { Marker } from "react-map-gl"
import { MAP_BOX_TOKEN } from "../util/getMapboxToken";
import classes from "../components/dashboard/Dashboard.module.css";
import { FaLocationPin } from "react-icons/fa6";
import { IoLocation, IoLocationSharp } from "react-icons/io5";

function MapComponent() {
  const [newPlace, setNewPlace] = useState(null);
  const [viewPort, setViewPort] = useState({
    latitude: 28.6448,
    longitude: 77.216,
    zoom: 10,
  });

  // const Map = ReactMapboxGl({
  //   accessToken: MAP_BOX_TOKEN,
  //   interactive: true,
  // });

  function handleClick(e){
    console.log("new place:", e.lngLat)
    const {lng, lat} = e.lngLat;
    setNewPlace({lat: lat, lng: lng});
  }

  return (
    <div className={classes["map-container"]}>
      <Map
      mapboxAccessToken={MAP_BOX_TOKEN}
      initialViewState={{
        longitude: 78.476,
        latitude: 17.4065,
        zoom: 12
      }}
      style={{width: "100%", height: "100%"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onClick={handleClick}
    >
      {newPlace && <Marker longitude={newPlace?.lng} latitude={newPlace?.lat} pitchAlignment="map" anchor="bottom" >
        <IoLocation color="red" size={50}/>
      </Marker>}
    </Map>
    </div>
  );
}

export default MapComponent;