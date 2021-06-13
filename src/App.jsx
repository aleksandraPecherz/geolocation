
import './App.css';
import React, {useState, useEffect} from 'react';
import Map from './components/Map'
import Info from './components/Info'
import SearchEngine from './components/SearchEngine'
import List from './components/List.jsx'
function App() {
 const [locationInfo, setLocationInfo] = useState([]);
 const [userLocationInfo, setUserLocationInfo] = useState([]);
 useEffect(() => {
   fetch('https://api.ipify.org?format=jsonp?callback=?', {
     method: 'GET',
     headers: {},
   })
   .then(res => {
     return res.text()})
    .then(ip=> {
      getGeolocationDetails(ip, "", true)})}, []);
      
  const getGeolocationDetails = (ip, URL="", isUserInfo=false) => {
      fetch(
        `http://api.ipstack.com/${ip}?access_key=931c6e8be10d8d3dce7d5ced82e8c7cb`)
        .then(response => response.json())
          .then(data => {
            console.log(data)
            const locationData = {
              ip: data.ip,
              city: data.city,
              country: data.country_name,
              countryCode: data.country_code,
              countryCapital: data.location.capital,
              continent: data.continent_name,
              region: data.region_name,
              isUserInfo: isUserInfo,
              latitude: data.latitude,
              longitude: data.longitude,
              URL: URL

            }     
              isUserInfo ? setUserLocationInfo(locationData):setLocationInfo([...locationInfo,locationData])
          });
        };
  return (
    <div className="app-container"> 
      <List 
      location={locationInfo}
      getGeolocationDetails={getGeolocationDetails} />
      <Map 
        location={userLocationInfo} 
        currentClass="user-map"/>
      <Info 
        location={userLocationInfo} 
        currentClass="user-info"/>
      <SearchEngine getGeolocationDetails={getGeolocationDetails} />
      <Map 
        location={locationInfo} 
        currentClass="searched-map"/>
      <Info 
        location={locationInfo} 
        currentClass="searched-info"/>
    </div>
  );
}

export default App;
