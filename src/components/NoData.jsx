import React from 'react';
import '../App.css';
function NoData({location}) {

    return(   
        location.city===null?
        <h3>No information about <i>"{location.ip}"</i>. Your IP/URL not exist in database  </h3>:
        <h3>no information</h3>
        
        
    )
}
export default NoData;
