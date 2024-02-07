import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import Map, { Marker } from "react-map-gl"
import { MAP_BOX_TOKEN } from "../util/getMapboxToken";
import classes from "../components/dashboard/Dashboard.module.css";
import auto from "../assets/auto.png"
import school3 from "../assets/school5.png"
import student from "../assets/student.png"
import autoLeft from "../assets/autoLeft.png"
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
    console.log({lat: lat, lng: lng});
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
      <Marker longitude={78.476} latitude={17.4065} pitchAlignment="map" anchor="bottom" >
        <img src={school3} alt="school" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.50392371314149} latitude={17.396215154323798} pitchAlignment="map" anchor="bottom" >
        <img src={autoLeft} alt="auto" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.42357205853722} latitude={17.391572673532394} pitchAlignment="map" anchor="bottom" >
        <img src={auto} alt="auto" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.55103380648109} latitude={17.398693530244103} pitchAlignment="map" anchor="bottom" >
        <img src={auto} alt="auto" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.52281515353468} latitude={17.365694159840828} pitchAlignment="map" anchor="bottom" >
        <img src={autoLeft} alt="auto" style={{width: "2.5rem"}} />
      </Marker>

      <Marker longitude={78.44831959884834} latitude={17.427853651016193} pitchAlignment="map" anchor="bottom" >
        <img src={school3} alt="school" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.55540979695428} latitude={17.45283445559228} pitchAlignment="map" anchor="bottom" >
        <img src={school3} alt="school" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.38631298174641} latitude={17.435563458725653} pitchAlignment="map" anchor="bottom" >
        <img src={autoLeft} alt="auto" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.60529419588812} latitude={17.436497262870603} pitchAlignment="map" anchor="bottom" >
        <img src={autoLeft} alt="auto" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.35828279817821} latitude={17.397025475799765} pitchAlignment="map" anchor="bottom" >
        <img src={school3} alt="school" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.48621704509213} latitude={17.472094037967025} pitchAlignment="map" anchor="bottom" >
        <img src={autoLeft} alt="auto" style={{width: "2.5rem"}} />
      </Marker>      

      <Marker longitude={78.5294056654958} latitude={17.44109312121492} pitchAlignment="map" anchor="bottom" >
        <img src={student} alt="student" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.4090544802724} latitude={17.419625863376183} pitchAlignment="map" anchor="bottom" >
        <img src={student} alt="student" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.59795351447013} latitude={17.386421530623636} pitchAlignment="map" anchor="bottom" >
        <img src={student} alt="student" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.46063783687299} latitude={17.371240619644624} pitchAlignment="map" anchor="bottom" >
        <img src={student} alt="student" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.49755797667416} latitude={17.451203767696967} pitchAlignment="map" anchor="bottom" >
        <img src={student} alt="student" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.42818827748312} latitude={17.48129224282519} pitchAlignment="map" anchor="bottom" >
        <img src={student} alt="student" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.60877307945998} latitude={17.476952697653573} pitchAlignment="map" anchor="bottom" >
        <img src={autoLeft} alt="auto" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.61822228421426} latitude={17.36141607285026} pitchAlignment="map" anchor="bottom" >
        <img src={school3} alt="school" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.39529104611609} latitude={17.367428449596105} pitchAlignment="map" anchor="bottom" >
        <img src={autoLeft} alt="auto" style={{width: "2.5rem"}} />
      </Marker>
      <Marker longitude={78.34594519906364} latitude={17.46493495561407} pitchAlignment="map" anchor="bottom" >
        <img src={student} alt="student" style={{width: "2.5rem"}} />
      </Marker>
    </Map>
    </div>
  );
}

export default MapComponent;