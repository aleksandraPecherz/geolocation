import React from 'react';
import '../App.css';
function ListElement({element, key, getGeolocationDetails}) {
const handleClick =()=>{
    getGeolocationDetails(element.ip)
}
return(   
     <li className="list-element" key={key}>
        <p className="main-information"> <em>{element.URL!==""?`Searched URL: ${element.URL}`:`Searched IP: ${element.ip}`}</em></p> 
        <p className="location-information">{element.city} , {element.region} , {element.country}</p> 
        <button className="go-to-button" onClick={handleClick}>GO TO</button>
    </li>
 )
}
export default ListElement;