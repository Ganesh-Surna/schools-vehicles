import { Col, Row } from 'antd'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import Chart from '../../UI/Chart'
import BarChartComponent from '../../UI/BarChartComponent'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import classes from "./Dashboard.module.css"
import mapboxgl from "mapbox-gl";
import { MAP_BOX_TOKEN } from '../../util/getMapboxToken';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapComponent from '../../UI/MapComponent';


function Dashboard() {

  // mapboxgl.accessToken = MAP_BOX_TOKEN;
  // mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FuZXNoLXN1cm5hIiwiYSI6ImNsbnN4NWhxbTIwNG0ya29kd25mdGJvYmkifQ.azj7SnCyv-y3JFx5YUDmMA';

  const Map = ReactMapboxGl({
    accessToken: MAP_BOX_TOKEN,
    interactive: true,
  });

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v12',
  //     center: [lng, lat],
  //     zoom: zoom
  //   });
     
  //   map.current.on('move', () => {
  //   setLng(map.current.getCenter().lng.toFixed(4));
  //   setLat(map.current.getCenter().lat.toFixed(4));
  //   setZoom(map.current.getZoom().toFixed(2));
  //   });
  // }, [lat, lng, zoom]);


  return (
    <div>
     <Row gutter={[24,16]} style={{margin: "1rem 2rem"}}>
        <Col span={12}>
          <Chart title={"Bar Chart 1"} companyName={"Company 1"} chartComponent={<BarChartComponent/>}/>
        </Col>
        <Col span={12}>
          <Chart title={"Bar Chart 2"} companyName={"Company 2"} chartComponent={<BarChartComponent/>}/>
        </Col>
     </Row>
     <Row style={{margin: "0 auto", height: "30rem", width: "80%"}}>
        <Col span={24} style={{width: "100%", height: "100%"}}>
              {/* <div className={classes["sidebar"]}>
                  Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
              </div>
              <div ref={mapContainer} className={classes["map-container"]} /> */}

              {/* <Map
                style='mapbox://styles/mapbox/streets-v9'
                // containerStyle={{
                //   height: '100%',
                //   width: '100%'
                // }}
                zoom={[10]}
                className={classes["map-container"]}
            >
              <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
              </Layer>
            </Map> */}

            <MapComponent/>
        </Col>
     </Row>
    </div>
  )
}

export default Dashboard
