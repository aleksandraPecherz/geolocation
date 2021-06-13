import React from 'react';
import '../App.css';
import NoData from './NoData'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
function Info({location, currentClass}) {
    let displayedLocation;
    displayedLocation=(location.length) ? location[location.length-1] : location;
    if (Object.keys(displayedLocation).length === 0 || displayedLocation.city===null) 
        return (
            <div className={currentClass}>
                <NoData location={displayedLocation}/>
            </div>
        )
    
    return(
    <div className={currentClass}>
        <p style={{fontSize: "60px"}}>{getUnicodeFlagIcon(`${displayedLocation.countryCode}`)}</p>
        <h3>{displayedLocation.isUserInfo? `Your IP: ` : `Searched IP: `} {displayedLocation.ip}</h3>
        <h4>city: {displayedLocation.city}</h4>
        <p>(<em>{Math.round(displayedLocation.longitude*100)/100} E, {Math.round(displayedLocation.latitude*100)/100} N</em>)</p>
        <p>region: {displayedLocation.region}</p>
        <p>country: {displayedLocation.country}</p>
        <p>continent: {displayedLocation.continent}</p>
    </div>
    )
}
export default Info;