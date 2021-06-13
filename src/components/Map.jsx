import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "../App.css";
import NoData from './NoData'
mapboxgl.accessToken = "pk.eyJ1IjoiYWxleGFuZHJhcGVibiIsImEiOiJja3BzZ2czbm4wMjl0MzJxd3YwbjdrNDQxIn0.zJZcb2aTj3BlX8xoZ7-VxQ";

const Map = ({location, currentClass}) => {
  const mapContainerRef = useRef(null);
    
  useEffect(() => {
    let displayedLocation
    if (Object.keys(location).length === 0) return 
    displayedLocation= (location.length) ? location[location.length-1] : location;
    if (displayedLocation.city===null) return
    const map = new mapboxgl.Map({
    container: mapContainerRef.current,
    style: "mapbox://styles/alexandrapebn/ckpswwpoa0rkc18oy6k9q2fek",
    center: [displayedLocation.longitude, displayedLocation.latitude],
    zoom: 12.5,
    });
     return () => map.remove(); 
  }, [location]);

  return (<div className={currentClass}> 
  {(Object.keys(location).length === 0 || (location.length && location[location.length-1].city==null) ) ? 
  <NoData location={location.length ? location[location.length-1] : []}/> : 
  <div className="map" ref={mapContainerRef} /> }
  </div>
  )
};

export default Map;
