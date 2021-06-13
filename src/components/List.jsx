import React from 'react';
import '../App.css';
import ListElement from './ListElement.jsx'
function List({location, getGeolocationDetails}) {

    const arrayOfUniqueIp = [...new Set(location.map(element => element.ip ))]

    const listOfUniqueLocation= arrayOfUniqueIp.map( element => 
         (location.find(element2=> element2.ip === element))).map((element)=> 
         
         <ListElement 
         element={element} 
         key={element.id} 
         getGeolocationDetails={getGeolocationDetails}/>)

    return(   
        <div className="searched-list">
            <h2>Last Searched</h2>
          {listOfUniqueLocation.length? <ul>{listOfUniqueLocation}</ul> : <h3>no data to display</h3>}
        </div>
    )
}
export default List;